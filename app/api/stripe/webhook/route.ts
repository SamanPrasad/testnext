import { connectDB } from "@/lib/dataSource";
import { CheckOut } from "@/lib/models/Checkout";
import { createStripe } from "@/lib/payment/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req: NextRequest) {
  const stripe = createStripe();
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!endpointSecret || !rawBody || !signature) {
    console.error("Secret or Request body or Signature not found!");
    return NextResponse.json(
      { error: "Secret or Request body or Signature not found!" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Webhook signature verification falied!" },
      { status: 500 }
    );
  }

  if (event.type == "checkout.session.completed") {
    await connectDB();
    const session = event.data.object;
    const checkOut = new CheckOut({
      object: event.object,
      type: event.type,
      data: {
        object: {
          id: session.id,
          currency: session.currency,
          customer: session.customer,
          mode: session.mode,
          metadata: {
            user_name: session.metadata?.user_name,
          },
        },
      },
    });
    await checkOut.save();
  }

  return NextResponse.json("success");
}

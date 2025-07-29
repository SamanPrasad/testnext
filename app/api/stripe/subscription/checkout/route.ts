import { createStripe } from "@/lib/payment/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const stripe = createStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card", "amazon_pay"],
  });

  return NextResponse.json("success");
}

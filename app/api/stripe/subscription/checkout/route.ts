import { createStripe } from "@/lib/payment/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const stripe = createStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer_creation: "if_required",
    line_items: [
      {
        price: "price_1RqIpX7rGzlKVazq7jdX8WzV",
        quantity: 1,
      },
    ],
    success_url:
      "https://payhereclient.vercel.app?sessionId={CHECKOUT_SESSION_ID}",
    cancel_url: "https://payhereclient.vercel.app?status=cancel",
    metadata: {
      user_name: "Steve Rogers",
    },
  });

  return new Response(session.url, {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "https://payhereclient.vercel.app",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers":
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    },
  });
}

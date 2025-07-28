import { createStripe } from "@/lib/payment/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const stripe = createStripe();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: 1200,
          product_data: {
            name: "Calculator",
            description: "It's a calculator",
            images: [
              "https://shop.pentel.ca/cdn/shop/files/BLN73-A-1_14437c0c-ad70-4829-8b9d-9f2a6b1da6c0.jpg?v=1746207679&width=1946",
            ],
          },
        },
        quantity: 2,
      },
      {
        price_data: {
          currency: "usd",
          unit_amount: 500,
          product_data: {
            name: "Pen",
            description: "It's a pen",
          },
        },
        quantity: 1,
      },
      //   {
      //     price: "price_1Rpwp17rGzlKVazqSiAUb0pV",
      //     quantity: 2,
      //   },
    ],
    mode: "payment",
    success_url: "https://payhereclient.vercel.app?status=success",
    cancel_url: "https://payhereclient.vercel.app?status=cancel",
    metadata: {
      user_name: "Jerome Valeska",
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

import { NextRequest } from "next/server";
import md5 from "crypto-js/md5";

export async function POST() {
  const merchantSecret = process.env.MERCHANT_SECRET as string;
  const merchantId = "1231349";
  const orderId = "12345";
  const amount = "1000";
  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  const amountFormated = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const currency = "LKR";
  const hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

  console.log(hash);
  return new Response(hash, {
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

export async function GET(req: NextRequest) {
  return new Response("Hello");
}

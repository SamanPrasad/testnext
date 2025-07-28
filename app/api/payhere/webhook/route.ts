import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  redirect(
    `/payhere?merchant_id=${body.merchant_id}&status_message=${body.status_message}`
  );
}

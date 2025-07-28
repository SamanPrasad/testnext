import { connectDB } from "@/lib/dataSource";
import { CheckOut } from "@/lib/models/Checkout";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const checkOut = new CheckOut(body);
  await checkOut.save();
  return NextResponse.json("success");
}

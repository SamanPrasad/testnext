import { connectDB } from "@/lib/dataSource";
import { PayHere } from "@/lib/models/PayHere";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const params = new URLSearchParams(await req.text());
  const jsobObj = Object.fromEntries(params.entries());
  const payHere = new PayHere(jsobObj);
  await payHere.save();
  return NextResponse.json("success");
}

import { connectDB } from "@/lib/dataSource";
import { PayHere } from "@/lib/models/PayHere";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  // const body = await req.json();
  console.log("hook called");
  // const payHere = new PayHere(body);
  // await payHere.save();
  return NextResponse.json("success");
}

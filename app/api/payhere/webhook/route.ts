import { connectDB } from "@/lib/dataSource";
import { PayHere } from "@/lib/models/PayHere";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  console.log(req);
  // const body = await req.json();
  // const payHere = new PayHere(body);
  // await payHere.save();
  return NextResponse.json("success");
}

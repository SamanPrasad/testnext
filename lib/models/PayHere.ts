import mongoose, { Schema } from "mongoose";

const payHereSchema = new Schema({
  merchant_id: String,
  order_id: String,
  payhere_amount: String,
  status_code: String,
  status_message: String,
  method: String,
});

export const PayHere =
  mongoose.models.PayHere || mongoose.model("PayHere", payHereSchema);

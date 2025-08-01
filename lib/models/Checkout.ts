import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
  object: String,
  type: String,
  data: {
    object: {
      id: String,
      customer_email: String,
      customer: String,
      currency: String,
      mode: String,
      status: String,
      success_url: String,
      metadata: {
        user_name: String,
      },
    },
  },
});

export const CheckOut =
  mongoose.models.CheckOut || mongoose.model("CheckOut", checkoutSchema);

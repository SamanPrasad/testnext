import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
  id: Number,
  object: String,
  type: String,
  data: {
    object: {
      id: String,
      currency: String,
      customer: String,
      mode: String,
      metadata: {
        user_name: String,
      },
    },
    status: String,
  },
});

export const CheckOut =
  mongoose.models.CheckOut || mongoose.model("CheckOut", checkoutSchema);

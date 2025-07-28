import Stripe from "stripe";

let stripe: Stripe | null = null;

export function createStripe() {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE as string);
  }

  return stripe;
}

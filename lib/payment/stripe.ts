import Stripe from "stripe";

let stripe: Stripe | null = null;

export function createStripe() {
  if (!stripe) {
    stripe = new Stripe(
      "sk_test_51RoUPb7rGzlKVazq1l0fwlyPemRdVgydsRMGF9o1pNTkNf6MSqgHUzVO4J7U65lS4KoTGKyt9VK9OGYv6GQSGhzG008hMDymdK"
    );
  }

  return stripe;
}

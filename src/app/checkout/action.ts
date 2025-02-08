"use server";

import Stripe from "stripe";
export async function createPaymentIntent(totalPrice: number) {
  if (isNaN(totalPrice) || totalPrice <= 0) {
    throw new Error("Invalid total price");
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", // or the latest stable version
  });

  try {
    const amount = totalPrice * 100; // Convert to cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      automatic_payment_methods: { enabled: true },
    });

    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error("Stripe Error:", error);
    throw error;
  }
}

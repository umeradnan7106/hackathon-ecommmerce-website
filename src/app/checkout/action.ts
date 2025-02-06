"use server";

import Stripe from "stripe";
import exportTotalPrice from "./summary"

const totalPrice: number = Number(exportTotalPrice);


export async function createPaymentIntent() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", // or the latest stable version
  });
  try {
    // You can hardcode an amount here, e.g. $20 = 2000 in cents
    const amount = totalPrice * 100; 


    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      // Optionally, you can add metadata or other parameters
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    // In a real app, you should handle the error properly
    console.error(error);
    throw error;
  }
}
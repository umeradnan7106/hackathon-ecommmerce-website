"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";
import { useCart } from "../../CartContext/CartContext";
import { getTotalPrice } from "./summary";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutPage() {
  const { cart } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const totalPrice = getTotalPrice(cart); // Get total price from cart

  useEffect(() => {
    if (totalPrice > 0) {
      // Ensure total price is valid before calling API
      createPaymentIntent(totalPrice)
        .then((res) => {
          setClientSecret(res.clientSecret || null);
        })
        .catch((error) => console.error("Payment Intent Error:", error));
    }
  }, [totalPrice]); // Updated dependency array

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[440px]">
      <h1 className="text-[21px] font-medium py-2">
        How would you like to get your order?
      </h1>

      <div className="text-[15px] text-[#757575] pb-6">
        {`Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More`}
      </div>

      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred");
    } else {
      setErrorMessage(null);
      alert("Payment successful!");
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        className="text-center bg-black text-white w-full py-2 mt-4 rounded"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && (
        <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>
      )}
    </form>
  );
}

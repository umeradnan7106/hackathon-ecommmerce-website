import React from "react";
import CheckoutPage from "../checkout/checkout"
import Summary from "../checkout/summary"
import Header from "../header";
import Footer from "../footer";

export default function Joinus() {
  return (
    <>
    <Header />
    <div className="flex flex-wrap-reverse lg:justify-between max-w-[1000px] mx-auto mt-5 justify-center">
      <CheckoutPage />
      <Summary />
    </div>
    <Footer />
    </>
  );
}
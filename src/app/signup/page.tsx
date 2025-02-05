"use client";

import { useSession } from "next-auth/react";
import React from "react";
import WithoutLogin from "./withoutLogin";
import Login from "../component/login";
import Header from "../header";
import Footer from "../footer";

export default function Joinus() {
  const { data: session } = useSession();

  return (
    <>
    <Header />
      {session ? <Login /> : <WithoutLogin />}

      <Footer />
    </>
  );
}

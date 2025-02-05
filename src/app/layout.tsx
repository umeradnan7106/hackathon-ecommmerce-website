import "./globals.css";
import { CartProvider } from "../CartContext/CartContext";
import { ReactNode } from "react";
import SessionWrapper from "./SessionWrapper";

export const metadata = {
  title: "My Next.js App",
  description: "E-commerce application with cart functionality",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <SessionWrapper>
        <CartProvider>
          {children}
        </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}

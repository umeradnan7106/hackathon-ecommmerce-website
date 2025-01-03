import "./globals.css";
import { CartProvider } from "../CartContext/CartContext";
import { ReactNode } from "react";

export const metadata = {
  title: "My Next.js App",
  description: "E-commerce application with cart functionality",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

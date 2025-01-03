// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// // Define the shape of the cart context
// interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: number) => void;
// }

// // Provide a default value for the context
// const CartContext = createContext<CartContextType | null>(null);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item: CartItem) => setCart((prev) => [...prev, item]);
//   const removeFromCart = (id: number) =>
//     setCart((prev) => prev.filter((item) => item.id !== id));

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ProductType } from "../../type/productType";

// Define the ProductType type

// Define the context type
interface CartContextType {
  cart: ProductType[];
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>; // Include setCart in the context
  addToCart: (item: ProductType) => void;
  removeFromCart: (id: string) => void;
  getTotalQuantity: () => number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart function
  const addToCart = (item: ProductType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((ProductType) => ProductType._id === item._id);
      if (existingItem) {
        return prevCart.map((ProductType) =>
          ProductType._id === item._id
            ? { ...ProductType, quantity: ProductType.quantity + 1 }
            : ProductType
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove from cart function
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };


  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };


  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, getTotalQuantity }}> 
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

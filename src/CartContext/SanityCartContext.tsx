// "use client"

// import { createContext, useContext, useState, ReactNode } from "react";
// import { Product } from "../../type/products"; // Your Product type

// // Define the structure of the CartContext
// interface CartContextType {
//   cart: Product[];
//   setCart: React.Dispatch<React.SetStateAction<Product[]>>;
//   removeFromCart: (slug: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Cart provider component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // Remove item from cart based on slug
//   const removeFromCart = (slug: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.slug.current !== slug));
//   };

//   return (
//     <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to access the cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

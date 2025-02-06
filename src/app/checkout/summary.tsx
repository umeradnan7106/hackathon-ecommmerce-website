"use client";

import Image from "next/image";
import { useCart } from "../../CartContext/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { useEffect } from "react";


const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);

const AddToCartPage = () => {
  const { cart } = useCart();
//   const updateQuantity = (id: string, increment: boolean) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item._id === id
//           ? {
//               ...item,
//               quantity: increment
//                 ? item.quantity + 1
//                 : Math.max(item.quantity - 1, 1),
//             }
//           : item
//       )
//     );
//   };

  const calculateTotal = () => {
    console.log("Cart items:", cart);
    return cart.reduce((total, item) => {
      const price = item.price; // Assume price is already a number
      const quantity = item.quantity; // Quantity is already a number
      // Validate both price and quantity
      if (isNaN(price) || isNaN(quantity)) {
        console.warn("Invalid price or quantity for item:", item);
        return total;
      }
      console.log(
        `Processing item: ${item.productName}, Price: ${price}, Quantity: ${quantity}`
      );
      return total + price * quantity;
    }, 0);
  };

  const exportTotalPrice = (total: number) => {
    // Logic to export the total price to another file or service
    console.log("Exporting total price:", total);
  };

  useEffect(() => {
    const total = calculateTotal();
    exportTotalPrice(total);
  }, [cart]);


  return (
    <>  
        <div className="w-[440px]">
          <div className="text-[21px] font-medium mb-5">Order Summary</div>
          <div className="flex justify-between mb-1">
            <div className="text-[#8D8D8D]">Subtotal</div>
            <div className="text-[#8D8D8D]">{formatPrice(calculateTotal())}</div>
          </div>
          <div className="flex justify-between pb-4 border-b border-[#E5E5E5]">
            <div className="text-[#8D8D8D]">Estimated Delivery & Handling</div>
            <div className="text-[#8D8D8D]">Free</div>
          </div>
          <div className="flex justify-between my-3 pb-3 border-b border-[#E5E5E5]">
            <div>Total</div>
            <div>{formatPrice(calculateTotal())}</div>
          </div>
        <div className="text-[12px]">(The total reflects the price of your order, including all duties and taxes)</div>

        {/* Product */}

        {cart.length > 0 ? (
          <div className="my-6">
            {cart.map((item) => (
              <div key={item._id} className="flex gap-3 border-b pb-3 mb-3">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.productName}
                  width={150}
                  height={150}
                  className="rounded"
                />
                <div className="flex flex-col ">
                  <div className="text-[14px] font-medium">{item.productName}</div>
                  <div className="text-gray-600 text-[13px]">Qty: {item.quantity}</div>
                <div className="text-[14px] font-medium">Price: {formatPrice(item.price * item.quantity)}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No items in cart</div>
        )}

        </div>
    </>
  );
};
export default AddToCartPage;

"use client";
import Image from "next/image";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { useCart } from "../../CartContext/CartContext";



const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);


const AddToCartPage = () => {
  const { cart, setCart, removeFromCart } = useCart();
  const updateQuantity = (id: number, increment: boolean) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

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
    console.log(`Processing item: ${item.title}, Price: ${price}, Quantity: ${quantity}`);
    return total + price * quantity;
  }, 0);
};


  return (
    <>
      <Header />
      <div className="max-w-[1100px] mx-auto flex gap-5 my-4 flex-wrap justify-center">
        <div className="w-[733px]">
          <div className="bg-[#F7F7F7] p-3">
            <div className="text-[13px] font-medium -mt-2">Free Delivery</div>
            <div className="text-[11px]">
              Applies to orders of ₹ 14 000.00 or more.{" "}
              <span className="underline font-medium ml-2">View details</span>
            </div>
          </div>
          <div>
            <div className="text-[22px] font-medium my-5">Bag</div>
            {cart.length === 0 ? (
              <div className="text-center py-5 text-gray-500 text-lg">
                Your cart is empty. Start shopping now!
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-2 border-b border-[#E5E5E5] pb-5 pt-2">
                  <Image
                    src={item.image || "/fallback-image.png"}
                    alt={item.title || "Product Image"}
                    width={150}
                    height={150}
                  />
                  <div>
                    <div className="text-[15px] mt-1">{item.title}</div>
                    <div>MRP: ₹{item.price}</div>
                    <div className="flex items-center mt-2">
                      <button
                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md mr-2"
                        onClick={() => updateQuantity(item.id, false)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md ml-2"
                        onClick={() => updateQuantity(item.id, true)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="mt-2 cursor-pointer text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* Summary Section */}
        <div>
          <div className="text-[21px] font-medium mb-5">Summary</div>
          <div className="flex justify-between mb-1">
            <div>Subtotal</div>
            <div>{formatPrice(calculateTotal())}</div>
          </div>
          <div className="flex justify-between pb-4 border-b border-[#E5E5E5]">
            <div>Estimated Delivery & Handling</div>
            <div>Free</div>
          </div>
          <div className="flex justify-between my-3 pb-3 border-b border-[#E5E5E5]">
            <div>Total</div>
            <div>{formatPrice(calculateTotal())}</div>
          </div>
          <div className="bg-[#111111] text-[#FFFFFF] py-[18px] text-center rounded-full my-8">
            Member Checkout
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AddToCartPage;
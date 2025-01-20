"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "@/app/header";
import Footer from "@/app/footer";
import buy2 from "../../../../public/image/Buy 2.png";
import { useCart } from "../../../CartContext/CartContext";

interface ProductInfo {
  id: number;
  image: string;
  label: string;
  title: string;
  category: string;
  color: string;
  price: number;
}

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductInfo>();
  const [notification, setNotification] = useState<string | null>(null); // Notification state
  const { addToCart } = useCart();
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id || Array.isArray(id)) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products`);
        const data: ProductInfo[] = await res.json();
        const selectedProduct = data.find(
          (item) => item.id === Number(id)
        );
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // ProductDetails.tsx
const handleAddToCart = () => {
  if (!product) return;

  console.log("Product being added:", product);

  addToCart({
    id: product.id,
    image: product.image,
    title: product.title,
    price: product.price,
    quantity: 1, // Default quantity
  });

  setNotification(`${product.title} has been added to the cart.`);

  setTimeout(() => setNotification(null), 3000);
};


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      {/* Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {notification}
        </div>
      )}

      <div className="max-w-[1200px] flex justify-around mx-auto mt-20 flex-wrap">
        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={653}
            height={653}
            className="w-[653px]"
          />
        </div>

        {/* Product Details */}
        <div className="w-[376px] mt-5">
          <div className="text-[48px] font-medium pb-5">{product.title}</div>
          <div className="text-[16px] text-[#757575]">{product.category}</div>
          <div className="py-2">
            {`Turn style on its head with this crafted take on the ${product.title}.
              Unique layering and exposed foam accents ups the ante on this timeless silhouette.`}
          </div>
          <div className="text-[36px] font-medium pb-[24px] pt-[32px]">
            MRP: ₹{product.price}
          </div>

          {/* Add to Cart Button */}
          <div
            className="button flex items-center w-52 cursor-pointer"
            onClick={handleAddToCart}
          >
            <Image src={buy2} alt="Buy Now" width={25} className="mr-3" />
            Add To Cart
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
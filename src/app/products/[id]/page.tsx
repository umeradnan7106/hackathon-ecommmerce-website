"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "@/app/header";
import Footer from "@/app/footer";
import buy2 from "../../../../public/image/Buy 2.png";
import { useCart } from "../../../CartContext/CartContext";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ProductType } from "../../../../type/productType";
import { urlFor } from "@/sanity/lib/image";


const ProductDetails = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const { addToCart } = useCart();
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id || Array.isArray(id)) return;

    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          groq`*[_type == "product" && _id == $id][0] {
              _id,
              productName,
              image,
              price,
              category,
              inventory,
              status,
            }`,
          { id }
        );
        
        if (data) {
          setProduct({
            _id: data._id,
            image: data.image.asset._ref,
            productName: data.productName,
            category: data.category,
            price: data.price,
            _type: data._type,
            inventory: data.inventory,
            status: data.status,
            description: data.description,
            slug: data.slug || "", // Add slug property
            quantity: data.quantity || 1 // Add quantity property
          });
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      _id: product._id,
      image: product.image,
      productName: product.productName,
      price: product.price,
      quantity: 1,
      _type: product._type,
      category: product.category,
      inventory: product.inventory,
      status: product.status,
      description: product.description,
      slug: product.slug,
    });

    setNotification(`${product.productName} has been added to the cart.`);

    setTimeout(() => setNotification(null), 3000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {notification}
        </div>
      )}

      <div className="max-w-[1200px] flex justify-around mx-auto mt-20 flex-wrap">
        <div>
          <Image
            src={urlFor(product.image).url()}
            alt={product.productName}
            width={553}
            height={553}
          />
        </div>

        <div className="w-[376px] mt-5">
          <div className="text-[48px] font-medium pb-5">{product.productName}</div>
          <div className="text-[16px] text-[#757575]">{product.category}</div>
          <div className="py-2">
            {`Turn style on its head with this crafted take on the ${product.productName}. Unique layering and exposed foam accents ups the ante on this timeless silhouette.`}
          </div>
          <div className="text-[36px] font-medium pb-[24px] pt-[32px]">
            MRP: ₹{product.price}
          </div>

          <div className="button flex items-center w-52 cursor-pointer" onClick={handleAddToCart}>
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

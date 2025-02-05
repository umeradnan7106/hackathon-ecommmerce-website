// Data Fetching with Sanity with string ID 

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductType } from "../../../type/productType";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

const ProductPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data: ProductType[] = await client.fetch(groq`*[_type == "product"]`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleViewDetails = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="w-[1092px] py-5">
      <div className="flex flex-wrap gap-2 justify-center">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="w-[348px]" key={product._id}>
              <div className="bestSellingBox">
                <div
                  className="addToCartOverlay"
                  onClick={() => handleViewDetails(product._id)}
                >
                  View Full Details
                </div>
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={340}
                  height={340}
                  className="mainImage"
                />
              </div>
              <div className="text-[#9E3500] font-medium py-2">
                {product.status}
              </div>
              <div className="text-[#111111] font-medium">{product.productName}</div>
              <div className="text-[#757575] text-[15px]">{product.category}</div>
              {/* <div className="text-[#757575] text-[15px]">{product.color}</div> */}
              <div className="text-[#111111] font-medium py-2">
                MRP: ${product.price}
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductInfo {
  id: number;
  image: string;
  label: string;
  title: string;
  category: string;
  color: string;
  price: number;
}

const ProductPage = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      
      setProducts(data);
    };
    
    fetchProducts();
  }, []);

  const handleViewDetails = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="w-[1092px] py-5">
      <div className="flex flex-wrap gap-2 justify-center">
        {products.map((product) => (
          <div className="w-[348px]" key={product.id}>
            <div className="bestSellingBox">
              <div
                className="addToCartOverlay"
                onClick={() => handleViewDetails(product.id)}
              >
                View Full Details
              </div>
              <Image
                src={product.image}
                alt={product.title}
                width={340}
                height={340}
                className="mainImage"
              />
            </div>
            <div className="text-[#9E3500] font-medium py-2">
              {product.label}
            </div>
            <div className="text-[#111111] font-medium">{product.title}</div>
            <div className="text-[#757575] text-[15px]">{product.category}</div>
            <div className="text-[#757575] text-[15px]">{product.color}</div>
            <div className="text-[#111111] font-medium py-2">
              MRP: ${product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

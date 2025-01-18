// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// const ProductPage = () => {
//   const [products, setProducts] = useState<any[]>([]); // State to store products
//   const router = useRouter(); // Hook for navigation

  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const productsData = await client.fetch(`*[_type == "product"]`);
//         setProducts(productsData);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleViewDetails = (id: string) => {
//     router.push(`/product/${id}`); // Navigate to dynamic route
//   };

//   if (!products.length) {
//     return <div>Loading...</div>; // Loading state
//   }

//   return (
//     <div className="w-[1092px] py-5">
//       <div className="flex flex-wrap gap-2 justify-center">
//         {products.map((product) => (
//           <div className="w-[348px]" key={product._id}>
//             <div className="bestSellingBox">
//               <div
//                 className="addToCartOverlay"
//                 onClick={() => handleViewDetails(product._id)}
//               >
//                 View Full Details
//               </div>
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.productName}
//                 width={340}
//                 height={340}
//               />
//             </div>
//             <div className="text-[#9E3500] font-medium py-2">
//               {product.status}
//             </div>
//             <div className="text-[#111111] font-medium">{product.productName}</div>
//             <div className="text-[#757575] text-[15px]">{product.category}</div>
//             <div className="text-[#757575] text-[15px]">
//               Color: {product.colors}
//             </div>
//             <div className="text-[#111111] font-medium py-2">
//               MRP: ${product.price}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const ProductPage = () => {
  const [products, setProducts] = useState<any[]>([]); // State to store products
  const router = useRouter(); // Hook for navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await client.fetch(`*[_type == "product"]`);
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (id: string) => {
    router.push(`/product/${id}`); // Navigate to dynamic route
  };

  if (!products.length) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="w-[1092px] py-5">
      <div className="flex flex-wrap gap-2 justify-center">
        {products.map((product) => (
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
              />
            </div>
            <div className="text-[#9E3500] font-medium py-2">
              {product.status}
            </div>
            <div className="text-[#111111] font-medium">{product.productName}</div>
            <div className="text-[#757575] text-[15px]">{product.category}</div>
            <div className="text-[#757575] text-[15px]">
              Color: {product.colors}
            </div>
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
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import arrow from "../../public/image/arrow2.png";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";
// import { ProductType } from "../../type/productType";
// import { urlFor } from "@/sanity/lib/image";
// import { useRouter } from "next/navigation";

// export default function Product() {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const data: ProductType[] = await client.fetch(
//           groq`*[_type == 'product' && _id == _id][5..10]`
//         );
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   const handleViewDetails = (id: string) => {
//     router.push(`/products/${id}`);
//   };

//   return (
//     <div className="max-w-[1345px] mx-auto py-5">
//       {/* Header */}
//       <div className="flex justify-between py-8">
//         <div className="text-[18px] sm:text-[22px] font-medium py-4">
//           Best of Air Max
//         </div>
//         <div className="flex gap-2 items-center">
//           <div>Shop</div>
//           {/* Arrows */}
//           <Image
//             src={arrow}
//             alt="Previous"
//             className="cursor-pointer rotate-180 w-8 sm:w-12"
//           />
//           <Image
//             src={arrow}
//             alt="Next"
//             className="cursor-pointer w-8 sm:w-12"
//           />
//         </div>
//       </div>

//       {/* Slider */}
//       <div className="overflow-hidden relative flex flex-wrap gap-2 justify-center">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div className="w-[348px]" key={product._id}>
//               <div className="bestSellingBox">
//                 <div
//                   className="addToCartOverlay"
//                   onClick={() => handleViewDetails(product._id)}
//                 >
//                   View Full Details
//                 </div>
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.productName}
//                   width={340}
//                   height={340}
//                   className="mainImage"
//                 />
//               </div>
//               <div className="text-[#9E3500] font-medium py-2">
//                 {product.status}
//               </div>
//               <div className="text-[#111111] font-medium">
//                 {product.productName}
//               </div>
//               <div className="text-[#757575] text-[15px]">
//                 {product.category}
//               </div>
//               {/* <div className="text-[#757575] text-[15px]">{product.color}</div> */}
//               <div className="text-[#111111] font-medium py-2">
//                 MRP: ${product.price}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading products...</p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import arrow from "../../public/image/arrow2.png";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ProductType } from "../../type/productType";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function Product() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1100);
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data: ProductType[] = await client.fetch(
          groq`*[_type == 'product'][5..20]`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const productWidth = windowWidth > 400 ? 350 : windowWidth - 40;
  const totalProducts = products.length;

  // **Ensuring it works immediately on first load**
  useEffect(() => {
    if (products.length > 0) {
      setIndex(0);
    }
  }, [products]);

  // **Auto-slide every 3 seconds**
  useEffect(() => {
    const autoSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % totalProducts);
    };

    const interval = setInterval(autoSlide, 3000);
    return () => clearInterval(interval);
  }, [totalProducts]);

  // **Manual Sliding**
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalProducts);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts);
  };

  // **Touch Dragging (for Mobile Swipe)**
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX < -50) {
      prevSlide();
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto py-5 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between py-8">
        <div className="text-[18px] sm:text-[22px] font-medium py-4">
          Best of Air Max
        </div>
        <div className="flex gap-2 items-center">
          <div>Shop</div>
          {/* Arrows */}
          <Image
            src={arrow}
            alt="Previous"
            className="cursor-pointer rotate-180 w-8 sm:w-12"
            onClick={prevSlide}
          />
          <Image
            src={arrow}
            alt="Next"
            className="cursor-pointer w-8 sm:w-12"
            onClick={nextSlide}
          />
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative overflow-hidden"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * productWidth}px)`,
            width: `${totalProducts * productWidth}px`,
          }}
        >
          {products.map((product) => (
            <div
              className="flex-shrink-0 px-2"
              key={product._id}
              style={{
                flex: `0 0 ${productWidth}px`,
                margin: windowWidth <= 400 ? "0 auto" : "0",
              }}
            >
              <div className="bestSellingBox">
                <div
                  className="addToCartOverlay"
                  onClick={() => router.push(`/products/${product._id}`)}
                >
                  View Full Details
                </div>
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={productWidth}
                  height={productWidth}
                  className="mainImage"
                />
              </div>
              <div className="text-[#9E3500] font-medium py-2">
                {product.status}
              </div>
              <div className="text-[#111111] font-medium">
                {product.productName}
              </div>
              <div className="text-[#757575] text-[15px]">
                {product.category}
              </div>
              <div className="text-[#111111] font-medium py-2">
                MRP: ${product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

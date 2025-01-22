"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Product } from "../../../type/products"
import { client } from "@/sanity/lib/client"
import { allproducts } from "../../sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { useRouter } from "next/navigation"


const Products = () => {

    const [products, setProduct] = useState<Product[]>([])
      const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const fetchProduct: Product[] = await client.fetch(allproducts)
            setProduct(fetchProduct)
        }
        fetchData()
    },[])

    const handleViewDetails = (slug: string) => {
        router.push(`../productPage/${slug}`);
      };
    


    return(
        <>
        <div className="w-[1092px] py-5">
              <div className="flex flex-wrap gap-2 justify-center">
                {products.map((product) => (
                  <div className="w-[348px]" key={product._id}>
                    <div className="bestSellingBox">
                    
                      <div 
                        className="addToCartOverlay"
                        onClick={() => handleViewDetails(product.slug.current)}
                      >
                        View Product Details
                      </div>
                      {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.productName}
                        width={340}
                        height={340}
                        className="mainImage"
                      />
                    )}
                    </div>
                    <div className="text-[#9E3500] font-medium py-2">
                      {product.status}
                    </div>
                    <div className="text-[#111111] font-medium">{product.productName}</div>
                    <div className="text-[#757575] text-[15px]">{product.category}</div>
                    <div className="text-[#757575] text-[15px]">{product.color}</div>
                    <div className="text-[#111111] font-medium py-2">
                      MRP: ${product.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </>
    )
}

export default Products 
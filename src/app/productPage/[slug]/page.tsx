import { client } from "../../../sanity/lib/client";
import { Product } from "../../../../type/products";
import { groq } from "next-sanity";
import Header from "@/app/header";
import Image from "next/image";
import buy2 from "../../../../public/image/Buy 2.png";
import Footer from "@/app/footer";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        productName,
        _type,
        image,
        price,
        category,
        inventory,
        status,
        description,
        }`,{ slug }
  );
}

export default async function ProductPageProps({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <>
      <Header />

      {/* Notification */}
      {/* {notification && (
  <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
    {notification}
  </div>
)} */}

      <div className="max-w-[1200px] flex justify-around mx-auto mt-20 flex-wrap">
        {/* Product Image */}
        <div>
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={540}
              height={540}
              className="mainImage"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="w-[376px] mt-5">
          <div className="text-[48px] font-medium pb-5">
            {product.productName}
          </div>
          <div className="text-[16px] text-[#757575]">{product.category}</div>
          <div className="py-2">
            {`Turn style on its head with this crafted take on the ${product.productName}.
        Unique layering and exposed foam accents ups the ante on this timeless silhouette.`}
          </div>
          <div className="text-[36px] font-medium pb-[24px] pt-[32px]">
            MRP: ₹{product.price}
          </div>

          {/* Add to Cart Button */}
          <div
            className="button flex items-center w-52 cursor-pointer"
            //   onClick={handleAddToCart}
          >
            <Image src={buy2} alt="Buy Now" width={25} className="mr-3" />
            Add To Cart
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

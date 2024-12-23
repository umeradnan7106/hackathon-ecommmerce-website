import ResponsiveSidebar from "./responsiveside";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
import product from "../../../public/image/Rectangle.png";
import product1 from "../../../public/image/Rectangle (1).png";
import product2 from "../../../public/image/Rectangle (2).png";
import product3 from "../../../public/image/Rectangle (3).png";
import product4 from "../../../public/image/Rectangle (4).png";
import product5 from "../../../public/image/Rectangle (5).png";
import product6 from "../../../public/image/Rectangle (6).png";
import product7 from "../../../public/image/Rectangle (7).png";
import product8 from "../../../public/image/Rectangle (8).png";
import product9 from "../../../public/image/Rectangle (9).png";
import product10 from "../../../public/image/Rectangle (10).png";
import product11 from "../../../public/image/Rectangle (11).png";
import product12 from "../../../public/image/Rectangle (12).png";
import product13 from "../../../public/image/Rectangle (13).png";
import product14 from "../../../public/image/Rectangle (14).png";
import product15 from "../../../public/image/Rectangle (15).png";
import product16 from "../../../public/image/Rectangle (16).png";
import product17 from "../../../public/image/Rectangle (17).png";
import product18 from "../../../public/image/Rectangle (18).png";
import product19 from "../../../public/image/Rectangle (19).png";
import product20 from "../../../public/image/Rectangle (20).png";
import product21 from "../../../public/image/Rectangle (21).png";
import product22 from "../../../public/image/Rectangle (22).png";
import product23 from "../../../public/image/Rectangle (23).png";
import product24 from "../../../public/image/Rectangle (24).png";
import product25 from "../../../public/image/Rectangle (25).png";
import product26 from "../../../public/image/Rectangle (26).png";
import product27 from "../../../public/image/Rectangle (27).png";
import product28 from "../../../public/image/Rectangle (28).png";
import product29 from "../../../public/image/Rectangle (29).png";
import downArrow from "../../../public/image/down-arrow.png";
import filter from "../../../public/image/filter.png";

// Import images for the cards (you can add more images as needed)
// import shoe1 from "../../../public/image/shoe1.png";
// import shoe2 from "../../../public/image/shoe2.png";

const productData = [
  {
    image: product,
    label: "Just In",
    title: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    color: "1 Color",
    price: "MRP : ₹ 10 795.00",
  },
  {
    image: product1,
    label: "Just In",
    title: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    color: "1 Colors",
    price: "₹ 4995.00",
  },
  {
    image: product2,
    label: "Just In",
    title: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    color: "3 Colors",
    price: "₹ 8,695.00",
  },
  {
    image: product3,
    label: "Just In",
    title: "Nike Air Force 1 React",
    category: "Men's Shoes",
    color: "1 Color",
    price: "₹ 13,295.00",
  },
  {
    image: product4,
    label: "Promo Exclusion",
    title: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    color: "1 Color",
    price: "₹ 11,895.00",
  },
  {
    image: product5,
    label: "Just In",
    title: "Nike Standard Issue",
    category: "Women's Shoes",
    color: "1 Color",
    price: "₹ 2,895.00",
  },
  {
    image: product6,
    label: "Promo Exclusion",
    title: "Nike Dunk Low Retro SE",
    category: "Men's Shoes",
    color: "1 Color",
    price: "₹ 9,695.00",
  },
  {
    image: product7,
    label: "Sustainable Materials",
    title: "Nike Dri-FIT UV Hyverse",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    color: "1 Color",
    price: "₹ 2,495.00",
  },
  {
    image: product8,
    label: "Just In",
    title: "Nike Court Vision Low",
    category: "Men's Shoes",
    color: "1 Color",
    price: "₹ 5,695.00",
  },
  {
    image: product9,
    label: "Just In",
    title: "Nike Dri-FIT Ready",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    color: "1 Color",
    price: "₹ 2,495.00",
  },
  {
    image: product10,
    label: "Just In",
    title: "Nike One Leak Protection: Period",
    category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    color: "2 Color",
    price: "₹ 3,395.00",
  },
  {
    image: product11,
    label: "Just In",
    title: "Nike Force 1 LV8 3",
    category: "Older Kids' Shoes",
    color: "1 Color",
    price: "₹ 7,495.00",
  },
  {
    image: product12,
    label: "Just In",
    title: "Nike Blazer Low Platform",
    category: "Women's Shoes",
    color: "1 Color",
    price: "₹ 8,195.00",
  },
  {
    image: product13,
    label: "Just In",
    title: "Nike Blazer Low Platform",
    category: "Women's Shoes",
    color: "1 Color",
    price: "₹ 8,195.00",
  },
  {
    image: product14,
    label: "Just In",
    title: "Nike Pro Dri-FIT",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    color: "1 Color",
    price: "₹ 1,495.00",
  },
  {
    image: product15,
    label: "Just In",
    title: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    color: "1 Color",
    price: "₹ 8,695.00",
  },
  {
    image: product16,
    label: "Just In",
    title: "Nike Air Max SC",
    category: "Women's Shoes",
    color: "2 Color",
    price: "₹ 5,995.00",
  },
  {
    image: product17,
    label: "Just In",
    title: "Nike Dri-FIT UV Miler",
    category: "Men's Shorts-Sleeve Running Top",
    color: "1 Color",
    price: "₹ 1,695.00",
  },
  {
    image: product18,
    label: "Just In",
    title: "Nike Air Max SYSTEM",
    category: "Older Kids' Shoes",
    color: "1 Color",
    price: "₹ 6,495.00",
  },
  {
    image: product19,
    label: "Just In",
    title: "Nike Alate AI U",
    category: "women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
    color: "1 Color",
    price: "₹ 2,195.00",
  },
  {
    image: product20,
    label: "Just In",
    title: "Nike Court Legacy Lift",
    category: "Women's Shoes",
    color: "2 Color",
    price: "₹ 7,495.00",
  },
  {
    image: product21,
    label: "Just In",
    title: "Nike Swoosh",
    category: "Women's Medium-support Padded Sports Bra Tank",
    color: "2 Color",
    price: "₹ 3,095.00",
  },
  {
    image: product22,
    label: "Just In",
    title: "Nike SB Zoom Janoski OG+",
    category: "Shoes",
    color: "1 Color",
    price: "₹ 8,595.00",
  },
  {
    image: product23,
    label: "Just In",
    title: "Nike Dri-FIT Run Division Rise 365",
    category: "Men's Running Tank",
    color: "2 Color",
    price: "₹ 3,495.00",
  },
  {
    image: product24,
    label: "Just In",
    title: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx) 2-in-1 Versatile Shorts",
    color: "1 Color",
    price: "₹ 2,495.00",
  },
  {
    image: product25,
    label: "Just In",
    title: "Jordan Series ES",
    category: "Men's Shoes",
    color: "2 Color",
    price: "₹ 7,495.00",
  },
  {
    image: product26,
    label: "Just In",
    title: "Nike Outdoor Play",
    category: "Older kids' Oversized Woven Jacket",
    color: "1 Color",
    price: "₹ 3,895.00",
  },
  {
    image: product27,
    label: "Just In",
    title: "Nike Sportswear Trend",
    category: "Older Kids' (Girls') High-wasted Woven Shorts",
    color: "2 Color",
    price: "₹ 2,495.00",
  },
  {
    image: product28,
    label: "Just In",
    title: "Nike Blazer Low '77 Jumbo",
    category: "Women's Shoes",
    color: "1 Color",
    price: "₹ 8,595.00",
  },
  {
    image: product29,
    label: "Just In",
    title: "Nike SB Force 58",
    category: "Skate Shoe",
    color: "1 Color",
    price: "₹ 5,995.00",
  },
];

export default function AllProducts() {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between py-6">
          <div className="font-medium sm:text-[24px] text-[18px]">{`New(500)`}</div>
          <div className="flex items-center sm:gap-8 gap-2">
            <div className="flex items-center text-[14px] sm:text-[18px]">
              Hide Filters{" "}
              <Image
                src={filter}
                alt="filter"
                className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] ml-1"
              ></Image>
            </div>
            <div className="flex items-center text-[14px] sm:text-[18px]">
              Sort By{" "}
              <Image
                src={downArrow}
                alt="downArrow"
                className="w-[14px] h-[14px] mt-1 ml-1"
              ></Image>
            </div>

           <ResponsiveSidebar/>
           
          </div>
        </div>

        {/* sidebar */}

        <div className="flex justify-between ">
          <div className="w-[192px] hidden lg:block">
            <div className="border-b border-b-gray-300 pb-6">
              <div className="sidebar">Shoes</div>
              <div className="sidebar">Sports Bras</div>
              <div className="sidebar">Tops & T-Shirts</div>
              <div className="sidebar">Hoodies & Sweatshirts</div>
              <div className="sidebar">Jackets</div>
              <div className="sidebar">Trousers & Tights</div>
              <div className="sidebar">Shorts</div>
              <div className="sidebar">Tracksuits</div>
              <div className="sidebar">Jumpsuits & Rompers</div>
              <div className="sidebar">Skirts & Dresses</div>
              <div className="sidebar">Socks</div>
              <div className="sidebar">Accessories & Equipment</div>
            </div>

            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Gender</AccordionTrigger>
                  <AccordionContent>
                    <Checkbox /> Men
                  </AccordionContent>
                  <AccordionContent>
                    <Checkbox /> Women
                  </AccordionContent>
                  <AccordionContent>
                    <Checkbox /> Unisex
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Kids</AccordionTrigger>
                  <AccordionContent>
                    <Checkbox /> Boys
                  </AccordionContent>
                  <AccordionContent>
                    <Checkbox /> Girls
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Shop By Price</AccordionTrigger>
                  <AccordionContent>
                    <Checkbox /> Under ₹ 2 500.00
                  </AccordionContent>
                  <AccordionContent>
                    <Checkbox /> ₹ 2 501.00 - ₹ 7 500.00
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Products */}

          <div className="w-[1092px] py-5">
            <div className="flex flex-wrap gap-2 justify-center">
              {productData.map((product, index) => (
                <div key={index} className="w-[348px]">
                  <div>
                    <div className="bestSellingBox">
                      <div className="addToCartOverlay">View Full Details</div>
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="mainImage"
                      />
                    </div>
                    <div className="text-[#9E3500] font-medium py-2">
                      {product.label}
                    </div>
                    <div className="text-[#111111] font-medium">
                      {product.title}
                    </div>
                    <div className="text-[#757575] text-[15px]">
                      {product.category}
                    </div>
                    <div className="text-[#757575] text-[15px]">
                      {product.color}
                    </div>
                    <div className="text-[#111111] font-medium py-2">
                      MRP : {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-[20px] font-medium py-5">
                Related Categories
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="categories">Best Selling Products</div>
                <div className="categories">Best Shoes</div>
                <div className="categories">New Basketball Shoes</div>
                <div className="categories">New Football Shoes</div>
                <div className="categories">{`New Men's Shoes`}</div>
                <div className="categories">New Running Shoes</div>
                <div className="categories">{`Best Men's Shoes`}</div>
                <div className="categories">New Jordan Shoes</div>
                <div className="categories">{`Best Women's Shoes`}</div>
                <div className="categories">Best Training & Gym</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

"use client";

import ResponsiveSidebar from "./responsiveside";
import Product from "../../app/allproduct/product";
import Image from "next/image";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";

import Header from "../header";
import Footer from "../footer";
import downArrow from "../../../public/image/down-arrow.png";
import filter from "../../../public/image/filter.png";

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

          <Product/>
        </div>
      </div>

      <Footer />
    </>
  );
}
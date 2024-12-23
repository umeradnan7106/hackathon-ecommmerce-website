import sidebar from "../../../public/image/icons8-sidebar-100.png"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function ResponsiveSidebar() {
  return (
    <>
      {/* responsive */}

      <Sheet>
        <SheetTrigger className="block lg:hidden"><Image src={sidebar} alt="sidebar" width={25}></Image></SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>All Products Name</SheetTitle>
            
              <SheetDescription className="self-start text-[16px]">Shoes</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Sports Bras</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Tops & T-Shirts</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Hoodies & Sweatshirts</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Jackets</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Trousers & Tights</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Shorts</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Tracksuits</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Jumpsuits & Rompers</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Skirts & Dresses</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Socks</SheetDescription>
              <SheetDescription className="self-start text-[16px]">Accessories & Equipment</SheetDescription>

              <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Gender</AccordionTrigger>
                        <AccordionContent className="place-self-start">
                          <Checkbox /> Men
                        </AccordionContent>
                        <AccordionContent className="place-self-start">
                          <Checkbox /> Women
                        </AccordionContent>
                        <AccordionContent className="place-self-start">
                          <Checkbox /> Unisex
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Kids</AccordionTrigger>
                        <AccordionContent className="place-self-start">
                          <Checkbox /> Boys
                        </AccordionContent>
                        <AccordionContent className="place-self-start">
                          <Checkbox /> Girls
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Shop By Price</AccordionTrigger>
                        <AccordionContent className="place-self-start">
                          <Checkbox /> Under ₹ 2 500.00
                        </AccordionContent>
                        <AccordionContent className="place-self-start">
                          <Checkbox /> ₹ 2 501.00 - ₹ 7 500.00
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
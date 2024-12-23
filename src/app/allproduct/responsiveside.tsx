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

import { Checkbox } from "@radix-ui/react-checkbox";

export default function ResponsiveSidebar() {
  return (
    <>
      {/* responsive */}

      <Sheet>
        <SheetTrigger className="block lg:hidden">Open</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>All Products Name</SheetTitle>

            <SheetDescription>
              <SheetDescription className="text-sm text-gray-600">
                <SheetDescription className="flex">
                  <SheetDescription className="w-[192px]">
                    <SheetDescription className="border-b border-b-gray-300 pb-6">
                      <SheetDescription className="sidebar">
                        Shoes
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Sports Bras
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Tops & T-Shirts
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Hoodies & Sweatshirts
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Jackets
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Trousers & Tights
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Shorts
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Tracksuits
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Jumpsuits & Rompers
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Skirts & Dresses
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Socks
                      </SheetDescription>
                      <SheetDescription className="sidebar">
                        Accessories & Equipment
                      </SheetDescription>
                    </SheetDescription>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Gender</AccordionTrigger>
                        <AccordionContent>
                          <Checkbox />
                          Men
                        </AccordionContent>
                        <AccordionContent>
                          <Checkbox />
                          Women
                        </AccordionContent>
                        <AccordionContent>
                          <Checkbox /> Unisex
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

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
                  </SheetDescription>
                </SheetDescription>
              </SheetDescription>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

"use client";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { useCart } from "../CartContext/CartContext";
import basket from "../../public/image/Frame (1).png";
import Logo from "../../public/image/Frame.png";
import heart from "../../public/image/Auto Layout Horizontal (1).png";
import shop from "../../public/image/Auto Layout Horizontal (2).png";
import searchIcon from "../../public/image/Auto Layout Horizontal.png";
import hamburger from "../../public/image/3844437_hamburger_list_menu_more_navigation_icon.png";
import Link from "next/link";

export default function Header() {

  const { getTotalQuantity } = useCart(); // Get the total quantity

  const totalQuantity = getTotalQuantity(); // Get the total quantity


  return (
    <>
      <div className="bg-[#E5E5E5]">
        <div className="max-w-[1440] mx-auto">
          <div className="flex justify-between items-center py-1 ">
            <Image src={basket} alt="basket Logo"></Image>
            <div className="flex items-center">
              <div className="navButton">
                <Link href="/">Find a Store</Link>
              </div>
              |
              <div className="navButton">
                <Link href="/contact">Help</Link>
              </div>
              |
              <div className="navButton">
                <Link href="/login">Join Us</Link>
              </div>
              |
              <div className="navButton">
                <Link href="/join">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440] mx-auto">
        <div className="flex items-center justify-between mx-auto bg-white">
          <Image src={Logo} alt="Logo"></Image>

          <div className="sm:flex space-x-7 lg:ml-[160px] hidden ">
            <div className="hoverUnderline">
              <Link href="/allproduct">New & Featured</Link>
            </div>
            <div className="hoverUnderline">
              <Link href="/allproduct">Men</Link>
            </div>
            <div className="hoverUnderline">
              <Link href="/allproduct">Women</Link>
            </div>
            <div className="hoverUnderline">
              <Link href="/allproduct">Sale</Link>
            </div>
            <div className="hoverUnderline">
              <Link href="/allproduct">SNKRS</Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <label className="relative block w-40">
                <span className="absolute flex items-center">
                  <Image
                    src={searchIcon}
                    alt="search icon"
                    className="mt-1 ml-1"
                  ></Image>
                </span>

                <input
                  className="placeholder:normal-case placeholder:text-slate-400 block w-full bg-[#F5F5F5] rounded-full py-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm pl-11"
                  placeholder="Search"
                  type="text"
                  name="search"
                />
              </label>
            </div>

            <Image src={heart} alt="heart" className="w-8"></Image>
            <div>
            <div className="ml-[18px] mt-[10px] text-[15px] text-red-700 font-semibold">{totalQuantity}</div>
            <Link href={`../cart`}><Image src={shop} alt="shop" className="w-[44px] -mt-[35px]"></Image></Link>
            
            </div>

            <div className="sm:hidden mt-1">
            <Sheet>
              <SheetTrigger>
                <Image
                  src={hamburger}
                  alt="hamburger"
                  width={20}
                  className="mr-1"
                ></Image>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Product Information </SheetTitle>
                </SheetHeader>
                 
                    <div className="flex flex-col gap-5 mt-5 text-gray-600">
                      <div className="hoverUnderline">
                        <Link href="/allproduct">New & Featured</Link>
                      </div>
                      <div className="hoverUnderline">
                        <Link href="/allproduct">Men</Link>
                      </div>
                      <div className="hoverUnderline">
                        <Link href="/allproduct">Women</Link>
                      </div>
                      <div className="hoverUnderline">
                        <Link href="/allproduct">Sale</Link>
                      </div>
                      <div className="hoverUnderline">
                        <Link href="/allproduct">SNKRS</Link>
                      </div>
                    </div>
              </SheetContent>
            </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

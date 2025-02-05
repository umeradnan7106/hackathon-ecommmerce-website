"use client";
import { useSession } from "next-auth/react";
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
  const { data: session } = useSession(); // Get session data to track login status
  const totalQuantity = getTotalQuantity(); // Get the total quantity

  return (
    <>
      <div className="bg-[#E5E5E5]">
        <div className="max-w-[1440] mx-auto">
          <div className="flex justify-between items-center  ">
            <Image src={basket} alt="basket Logo"></Image>
            <div className="flex items-center">
              <div className="p-[5px] text-[10px] my-[2px] sm:text-[11px] sm:p-[10]">
                <Link href="/">Home</Link>
              </div>
              |
              <div className="p-[5px] text-[10px] my-[2px] sm:text-[11px] sm:p-[10]">
                <Link href="/contact">Help</Link>
              </div>
              |
              <div className="p-[5px] text-[10px] my-[2px] sm:text-[11px] sm:p-[10]">
                <Link href="/allproduct">Products</Link>
              </div>
              |
              <div className="flex items-center">
                {/* Conditionally render based on session */}
                {session ? (
                  <>
                    <div className="p-[5px] text-[10px] my-[2px] sm:text-[11px] sm:p-[10]">Hello</div>
                    <div className="p-[5px] text-[10px] my-[2px] sm:text-[11px] sm:p-[10] flex items-center">
                      <Link href="/signup">
                      <Image
                        src={
                          session.user?.image ||
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user?.name || "User")}&background=random`
                        }
                        alt="User Image"
                        className="w-8 h-8 rounded-full"
                        width={25}
                        height={25}
                      />
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-[5px] text-[10px] mx-[2px] sm:text-[11px] sm:p-[10]">
                      <Link href="/login">Join Us</Link>
                    </div>
                    |
                    <div className="p-[5px] text-[10px] mx-[2px] sm:text-[11px] sm:p-[10]">
                      <Link href="/signup">Sign In</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440] mx-auto">
        <div className="flex items-center justify-between mx-auto bg-white">
          <Link href="/"><Image src={Logo} alt="Logo" className="w-[50px] sm:w-20"></Image></Link>

          <div className="sm:flex space-x-7 lg:ml-[160px] hidden">
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

          <div className="flex items-center gap-0 sm:gap-2">
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

            <Image src={heart} alt="heart" className="w-6 sm:w-8"></Image>
            <div>
              <div className="mt-[7px] ml-[13px] text-[11px] sm:ml-[18px] md:mt-[10px] sm:text-[15px] text-red-700 font-semibold">
                {totalQuantity}
              </div>
              <Link href={`../cart`}>
                <Image
                  src={shop}
                  alt="shop"
                  className="w-[32px] -mt-[26px] sm:w-[44px] sm:-mt-[35px]"
                ></Image>
              </Link>
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

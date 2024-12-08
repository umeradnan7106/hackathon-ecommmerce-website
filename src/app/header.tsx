import Image from "next/image";
import basket from "../../public/image/Frame (1).png";
import Logo from "../../public/image/Frame.png";
import heart from "../../public/image/Auto Layout Horizontal (1).png";
import shop from "../../public/image/Auto Layout Horizontal (2).png";
import searchIcon from "../../public/image/Auto Layout Horizontal.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="bg-[#E5E5E5]">
        <div className="max-w-[1345] mx-auto">
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
      <div className="max-w-[1345] mx-auto">
        <div className="flex items-center justify-between mx-auto bg-white">
          <Image src={Logo} alt="Logo"></Image>

          <div className="flex space-x-7">
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
            <div>
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
            <Image src={shop} alt="shop" className="w-8"></Image>
          </div>
        </div>
      </div>
    </>
  );
}

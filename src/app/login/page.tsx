import logo from "../../../public/image/Frame.png";
import Header from "../header";
import Footer from "../footer";
import Image from "next/image";
import Link from "next/link";

export default function Joinus() {
  return (
    <>
      <Header />

      <div className="w-[324px] mx-auto ">
        <div className="justify-items-center">
        <Image src={logo} alt="logo"></Image>
        </div>
        <div className="text-[18px] font-bold text-center text-[#111111] py-5">BECOME A NIKE MEMBER</div>
        <div className="text-[14px] text-center text-[#8D8D8D]">
          Create your Nike Member profile and get <br />
          first access to the very best of Nike <br /> products, inspiration and
          community.
        </div>

        <label className="relative block py-4">
          <input
            className="placeholder:normal-case placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
            placeholder="Email address"
            type="text"
            name="search"
          />
        </label>

        <label className="relative block py-4">
          <input
            className="placeholder:normal-case placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
            placeholder="Password"
            type="text"
            name="search"
          />
        </label>

        <label className="relative block py-4">
          <input
            className="placeholder:normal-case placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
            placeholder="First Name"
            type="text"
            name="search"
          />
        </label>

        <label className="relative block py-4">
          <input
            className="placeholder:normal-case placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
            placeholder="Last Name"
            type="text"
            name="search"
          />
        </label>

        <label className="relative block py-4">
          <input
            className="placeholder:normal-case placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
            placeholder="Date of Birth"
            type="text"
            name="search"
          />
        </label>
        <div className="text-[11px] text-[#8D8D8D] text-center py-2">Get a Nike Member Reward every year on your Birthday.</div>

        <div className="flex justify-between">
            <div className="w-[153px] text-[#E5E5E5] text-center border border-gray-200 py-2">Male</div>
            <div className="w-[153px] text-[#E5E5E5] text-center border border-gray-200 py-2">Female</div>
        </div>

        <div className="flex items-center gap-2 py-3">
            <label>
                <input type="checkbox" />
            </label>
        <div className="text-[#8D8D8D] text-[11px]">Sign up for emails to get updates from Nike on <br />products, offers and your Member benefits</div>
        </div>
        <div className="text-[#8D8D8D] text-[11px] text-center py-4">By creating an account, you agree to Nike's <span className="underline">Privacy <br /> Policy</span> and <span className="underline">Terms of Use</span>.</div>
        
        
        <div className="bg-[#000000] text-white py-4 text-center my-4 rounded cursor-pointer">JOIN US</div>

        <div className="text-[#8D8D8D] text-center text-[11px]">Already a Member? <span className="underline text-black"><Link href="/sign">Sign In</Link>.</span></div>
      </div>

      <Footer />
    </>
  );
}

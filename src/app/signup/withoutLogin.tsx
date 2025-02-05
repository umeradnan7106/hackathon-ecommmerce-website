import Image from "next/image";
import logo from "../../../public/image/Frame.png";
import Link from "next/link";
import Login from "../component/login"

export default function Joinus() {
  return (
    <>
      
      <div className="block" >
        <div className="w-[324px] mx-auto ">
          <div className="justify-items-center">
            <Image src={logo} alt="logo"></Image>
          </div>
          <div className="text-[18px] font-bold text-center text-[#111111] py-1">
            YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
          </div>

          <label className="relative block py-2">
            <input
              className="placeholder:normal-case placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
              placeholder="Email address"
              type="text"
              name="search"
            />
          </label>

          <label className="relative block py-2">
            <input
              className="placeholder:normal-case placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
              placeholder="Password"
              type="text"
              name="search"
            />
          </label>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 py-3 ">
              <label>
                <input type="checkbox" />
              </label>
              <div className="text-[#8D8D8D] text-[11px]">
                Keep me signed in
              </div>
            </div>
              <div className="text-[#BCBCBC] text-[12px]">Forgotten your password?</div>
          </div>
          
          <div className="text-[#8D8D8D] text-[11px] text-center py-4">{`By logging in, you agree to Nike's`} <span className="underline">Privacy <br /> Policy</span> and <span className="underline">Terms of Use</span>.</div>

          <div className="bg-[#000000] text-white py-4 text-center my-2 rounded cursor-pointer">SIGN IN</div>
          <div className="text-center font-light text-[10px]">OR</div>


          <Login />

          
          <div className="text-[#8D8D8D] text-center text-[11px]">Not a Member? <span className="underline text-black"><Link href="/login">Join Us</Link>.</span></div>
        </div>
      </div>

    </>
  );
}

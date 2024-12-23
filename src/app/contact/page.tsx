import Image from "next/image";
import Header from "../header";
import Footer from "../footer";
import searchIcon from "../../../public/image/Auto Layout Horizontal.png";
import thumbsup from "../../../public/image/thumbsup.png";
import thumbsdown from "../../../public/image/thumbsdown.png";
import mobile from "../../../public/image/mobile.png";
import messege from "../../../public/image/messege.png";
import location from "../../../public/image/location2.png";
import mail from "../../../public/image/email.png";
import Link from "next/link";

export default function Contact() {
  return (
    <>
    <Header/>
      <div className="justify-items-center">
        <div className="text-[32px] font-medium py-3">GET HELP</div>
        <div>
          <label className="relative block w-[22.5rem]">
            <input
              className="placeholder:normal-case placeholder:text-slate-400 block w-full border border-black rounded py-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm pl-2"
              placeholder="What we can help you with?"
              type="text"
              name="search"
            />
            <span className="absolute flex items-center">
              <Image
                src={searchIcon}
                alt="search icon"
                className="-mt-11 ml-80"
              ></Image>
            </span>
          </label>
        </div>
      </div>

      <div className="flex py-10 max-w-[1310px] lg:justify-between mx-auto flex-wrap justify-center">
        
        <div className="max-w-[925px] border-r border-r-gray-400">
          <div className="font-medium text-[20px] sm:text-[28px] py-7">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </div>
          <div>
            {`We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:`}
          </div>

          <div className="p-5">
            <div>
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </div>
            <div className="py-3">
              {`If you enter your PAN information at checkout, you'll be able to
              pay for your order with PayTM or a local credit or debit card.`}
            </div>
            <div>Apple Pay</div>
          </div>

          <div className="py-4">
            <span className="font-semibold underline cursor-pointer">
              Nike Members
            </span>{" "}
            {`can store multiple debit or credit cards in their profile for faster
            checkout. If you're not already a Member,`}{" "}
            <span className="font-medium underline">
              <Link href="/join">join us </Link>
            </span>
            today.
          </div>
          <button className="button text-sm sm:text-base">
            <Link href="/join">JOIN US</Link>
          </button>
          <button className="button text-sm sm:text-base">SHOP NIKE</button>

          <div className="font-medium text-[20px] py-3">FAQs</div>
          <div className="font-bold pt-3">
            Does my card need international purchases enabled?
          </div>
          <div className="py-3">
            Yes, we recommend asking your bank to enable international purchases
            on your card. You will be notified at checkout if international
            purchases need to be enabled.
          </div>

          <div className="py-3">
            Please note, some banks may charge a small transaction fee for
            international orders.
          </div>

          <div className="font-bold pt-3">
            Can I pay for my order with multiple methods?
          </div>
          <div className="py-1">
            {`No, payment for Nike orders can't be split between multiple payment
            methods.`}
          </div>

          <div className="font-bold pt-3">
            What payment method is accepted for SNKRS orders?
          </div>
          <div className="py-1">
            You can use any accepted credit card to pay for your SNKRS order.
          </div>

          <div className="font-bold pt-3">
            {`Why don't I see Apple Pay as an option?`}
          </div>
          <div className="py-1">
            {`To see Apple Pay as an option in the Nike App or on Nike.com, you'll
            need to use a compatible Apple device running the latest OS, be
            signed in to your iCloud account and have a supported card in your
            Wallet. Additionally, you'll need to use Safari to use Apple Pay on
            Nike.com.`}
          </div>

          <div className="pt-6">Was this answer helpful?</div>
          <div className="flex">
            <Image src={thumbsup} alt="thumbsup"></Image>
            <Image src={thumbsdown} alt="thumbsdown"></Image>
          </div>
          <div className="text-[#757575] font-semibold py-1">RELATED</div>

          <div className="p-5">
            <div className="font-semibold underline cursor-pointer py-2">
              {`WHAT ARE NIKE'S DELIVERY OPTIONS?`}
            </div>
            <div className="font-semibold underline cursor-pointer">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </div>
          </div>
        </div>

        <div className="w-[255px] justify-items-center ">
          <div className="py-8">
            <Image src={mobile} alt="mobile"></Image>
          </div>
          <div className="font-semibold py-2">000 800 919 0566</div>
          <div className="text-center">
            Products & Orders: 24 hours a day, 7 days a week
          </div>
          <div className="text-center">
            Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
          </div>

          <div className="py-8">
            <Image src={messege} alt="messege"></Image>
          </div>
          <div className="font-semibold py-1">24 hours a day</div>
          <div>7 days a week</div>

          <div className="py-8">
            <Image src={mail} alt="email"></Image>
          </div>
          <div className="font-semibold py-1">{`We'll reply within`}</div>
          <div>five business days</div>

          <div className="py-8">
            <Image src={location} alt="location"></Image>
          </div>
          <div className="font-semibold py-1">STORE LOCATOR</div>
          <div>Find Nike retail stores near you</div>
        </div>
      </div>
      

      <Footer/>
    </>
  );
}

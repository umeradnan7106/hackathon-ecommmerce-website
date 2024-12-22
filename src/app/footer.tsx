import Image from "next/image";
import twitter from "../../public/image/twitter.png";
import facebook from "../../public/image/facebook.png";
import youtube from "../../public/image/youtube.png";
import insta from "../../public/image/insta.png";
import location from "../../public/image/location.png";

export default function Footer() {
  return (
    
// flex-wrap: wrap;
// justify-content: center;
// gap: 0.5rem;
    <>
    
    <div className="pt-20">
      <div className="bg-[#111111]">
      <div className="max-w-[1440px] mx-auto py-5">
        <div className="flex sm:justify-between py-10 flex-wrap justify-center gap-2">
          <div className="flex gap-2 sm:gap-24">
            <div>
              <div className="footerText">Find A Store</div>
              <div className="footerText">become a member</div>
              <div className="footerText">sign up for email</div>
              <div className="footerText">send us feedback</div>
              <div className="footerText">students discounts</div>
            </div>

            <div>
              <div className="footerText">Get Help</div>
              <div className="footerText2">Order Status</div>
              <div className="footerText2">Delivery</div>
              <div className="footerText2">Returns</div>
              <div className="footerText2">Payment Options</div>
              <div className="footerText2">
                Contact Us On Nike.com Inquiries
              </div>
              <div className="footerText2">
                Contact Us On All Other Inquiries
              </div>
            </div>

            <div>
              <div className="footerText">About Nike</div>
              <div className="footerText2">News</div>
              <div className="footerText2">Careers</div>
              <div className="footerText2">Investors</div>
              <div className="footerText2">Sustainability</div>
            </div>
          </div>

          <div className="flex gap-2 h-8">
            <Image src={twitter} alt="twitter"></Image>
            <Image src={facebook} alt="facebook"></Image>
            <Image src={youtube} alt="youtube"></Image>
            <Image src={insta} alt="insta"></Image>
          </div>
        </div>

        <div className="flex sm:justify-between py-3 flex-wrap justify-center gap-2">
          <div className="flex h-4 items-center">
            <Image src={location} alt="location"></Image>
            <div className="footerText">India</div>
            <div className="footerText2">
              © 2023 Nike, Inc. All Rights Reserved
            </div>
          </div>

          <div className="flex">
            <div className="footerText3">Guides</div>
            <div className="footerText3">Terms of Sale</div>
            <div className="footerText3">Terms of Use</div>
            <div className="footerText3">Nike Privacy Policy</div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}


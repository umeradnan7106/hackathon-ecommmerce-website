import Image from "next/image";
import image2 from "../../public/image/Image2.png";

export default function Essentials() {
  return (
    <>
      <div className="max-w-[1345] mx-auto py-5">
        <div className="justify-items-center">
          <Image src={image2} alt="image2"></Image>
          <div className="text-[25px] sm:text-[56px] font-medium py-2">FLIGHT ESSENTIALS</div>
          <div className="text-[12] sm:text-[15px] py-2">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </div>
          <button className="button text-[12px] sm:text-[15px]">Shop</button>
        </div>
      </div>
    </>
  );
}

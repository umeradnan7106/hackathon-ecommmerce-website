import Image from "next/image";
import mainImage from "../../public/image/Image.png";

export default function Main() {
  return (
    <>
      <div className="text-center">
        <div className="py-2 bg-[#E5E5E5]">
        <div className="font-medium">Hello Nike App</div>
        <div className="text-[11px]">
          Download the app to access everything Nike.{" "}
          <span className="cursor-pointer font-medium hover:underline">Get Your Great</span>
        </div>
        </div>

        <div className="justify-items-center">
          <Image src={mainImage} alt="mainImage"></Image>
        </div>
        <div className="py-8">
          <div className="text-[15px] font-medium">First Look</div>
          <div className="text-[56px] font-medium">NIKE AIR MAX PULSE</div>
          <div className="text-[15px]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </div>
          <div className="py-2">
            <button className="button">Notify Me</button>
            <button className="button">Shop Air Max</button>
          </div>
        </div>
      </div>
    </>
  );
}

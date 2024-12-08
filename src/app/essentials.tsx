import Image from "next/image";
import menImage from "../../public/image/menImage.png";
import womenImage from "../../public/image/womenImage.png";
import kidImage from "../../public/image/kidsImage.png";

export default function Essentials() {
  return (
    <>
      <div className="max-w-[1345] mx-auto py-5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-[23px] text-[#111111] font-medium py-4">
            The Essential
          </div>
          <div className="flex justify-between">
            <div>
              <Image
                src={menImage}
                alt="menImage"
                className="essentialImage"
              ></Image>
              <div className="essentialButton">Men's</div>
            </div>
            <div>
              <Image
                src={womenImage}
                alt="womenImage"
                className="essentialImage"
              ></Image>
              <div className="essentialButton">Women's</div>
            </div>
            <div>
              <Image
                src={kidImage}
                alt="kidImage"
                className="essentialImage"
              ></Image>
              <div className="essentialButton">Kid's</div>
            </div>
          </div>

          <div className="flex justify-center gap-36 pt-10">
            <div>
              <div className="fontHead">Icons</div>
              <div className="fontText">Air Force 1</div>
              <div className="fontText">Huarache</div>
              <div className="fontText">Air Max 90</div>
              <div className="fontText">Air Max 95</div>
            </div>

            <div>
              <div className="fontHead">Shoes</div>
              <div className="fontText">All Shoes</div>
              <div className="fontText">Custom Shoes</div>
              <div className="fontText">Jordan Shoes</div>
              <div className="fontText">Running Shoes</div>
            </div>

            <div>
              <div className="fontHead">Clothing</div>
              <div className="fontText">All Clothing</div>
              <div className="fontText">Modest Wear</div>
              <div className="fontText">Hoodies & Pullovers</div>
              <div className="fontText">Shirts & Tops</div>
            </div>

            <div>
              <div className="fontHead">Kids'</div>
              <div className="fontText">Infant & Toddler Shoes</div>
              <div className="fontText">Kids' Shoes</div>
              <div className="fontText">Kids' Jordan Shoes</div>
              <div className="fontText">Kids' Basketball Shoes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

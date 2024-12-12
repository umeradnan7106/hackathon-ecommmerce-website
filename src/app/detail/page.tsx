import Image from "next/image";
import AllProducts from "../allproduct/page";
import product from "../../../public/image/Rectangle.png";
import buy2 from "../../../public/image/Buy 2.png";

export default function Details(){
    return(
        <>
            <div className="flex justify-between">
          <div>
            <Image src={product} alt="product2" className="w-[653px]"></Image>
          </div>
          <div className="w-[376px]">
            <div className="text-[48px] font-medium pb-5">
              Nike Air Force 1 PLT.AF.ORM
            </div>
            <div>
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its "inside out"-inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading, rich
              mixture of materials and aged midsole aesthetic give this release
              an artisan finish.
            </div>
            <div className="text-[36px] font-medium pb-[24px] pt-[32px]">
              ₹ 8 695.00
            </div>
            <div className="button flex items-center w-52">
              <Image src={buy2} alt="buy2"></Image>Add To Cart
            </div>
          </div>
        </div>
        </>
    )
}
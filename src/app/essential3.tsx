import Image from "next/image"
import Image3 from "../../public/image/Image3.png"

export default function Essentials(){
    return(
        <>
        <div className="max-w-[1345] mx-auto py-5">
        <div className="justify-items-center py-10">
            <Image src={Image3} alt="image2"></Image>
          <div className="text-[56px] font-medium py-2">STEP INTO WHAT FEELS GOOD</div>
          <div className="text-[15px] py-2">Cause everyone should know the feeling of running in that perfect pair.</div>
          <button className="button">Find Your Shoe</button>
        </div>
        </div>
        </>
    )
}
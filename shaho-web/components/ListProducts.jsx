import Image from "next/image";

import batikTulis from "@/public/images/cards/card1_batikTulis.png";
import batikCap from "@/public/images/cards/card2_batikCap.png";
import batikKombinasi from "@/public/images/cards/card3_batikKombinasi.png";
import batikPrinting from "@/public/images/cards/card4_batikPrinting.png";
import kursusMembatik from "@/public/images/cards/card5_kursusMembatik.png";
import peralatanMembatik from "@/public/images/cards/card6_peralatanMembatik.png";

export default function ListProducts() {
  return (
    <>
      <div className="w-[88%] max-w-[70rem] h-full flex flex-wrap">
        <div className="w-[50%] md:w-[33.33%] h-fit flex justify-center">
          <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
            <Image src={batikTulis} alt="batik tulis" />
          </div>
        </div>
        <div className="w-[50%] md:w-[33.33%] h-fit flex justify-center">
          <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
            <Image src={batikCap} alt="batik tulis" />
          </div>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
            <Image src={batikKombinasi} alt="batik tulis" />
          </div>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
            <Image src={batikPrinting} alt="batik tulis" />
          </div>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
            <Image src={kursusMembatik} alt="batik tulis" />
          </div>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
            <Image src={peralatanMembatik} alt="batik tulis" />
          </div>
        </div>
      </div>
    </>
  );
}

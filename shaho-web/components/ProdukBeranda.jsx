import Image from "next/image";

import batikTulis from "@/public/images/cards/card1_batikTulis.png";
import batikCap from "@/public/images/cards/card2_batikCap.png";
import batikKombinasi from "@/public/images/cards/card3_batikKombinasi.png";
import batikPrinting from "@/public/images/cards/card4_batikPrinting.png";
import kursusMembatik from "@/public/images/cards/card5_kursusMembatik.png";
import peralatanMembatik from "@/public/images/cards/card6_peralatanMembatik.png";

export default function ProdukBeranda() {
  return (
    <>
      <div className="relative w-full h-auto flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col items-center">
          {/* Header */}
          <div className="w-[93%] h-auto py-5 flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-3">
            <h1 className="text-[#73777B] md:text-lg lg:text-[calc(1.25rem+.2vw)] font-poppins text-center">
              PRODUK DAN LAYANAN
            </h1>
            <h1 className="text-blue-main font-poppins-bold drop-shadow-md text-center lg:text-start md:text-xl lg:text-[calc(1.25rem+1vw)]">
              Seluruh kebutuhan batik Anda tersedia di sini.
            </h1>
          </div>
          {/* Content */}
          <div className="w-[88%] h-full flex flex-wrap">
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
        </div>
      </div>
    </>
  );
}

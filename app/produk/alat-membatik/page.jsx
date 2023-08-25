import Navbar from "@/components/Navbar";
// import HeroDetail from "@/components/HeroDetail";
// import ContentDetail from "@/components/ContentDetail";

import Image from "next/image";
import Link from "next/link";

import Canting from "@/public/images/cards-alat/CARD-1-min.png";
import KomporListrik from "@/public/images/cards-alat/CARD-2-min.png";
import LilinBatik from "@/public/images/cards-alat/CARD-3-min.png";
import PewarnaBatik from "@/public/images/cards-alat/CARD-4-min.png";
import Waterglass from "@/public/images/cards-alat/CARD-5-min.png";
import KainKatunPrimissima from "@/public/images/cards-alat/CARD-6-min.png";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-auto pt-28 pb-5 flex flex-col justify-center items-center">
        <div className="w-[90%] h-[90%] max-w-[1200px] flex flex-wrap items-center">
          <div className="sm:w-[50%] md:w-[33.33%] h-fit flex justify-center">
            <div className="p-2 sm:p-3 duration-200">
              <Image src={Canting} alt="canting" />
            </div>
          </div>
          <div className="sm:w-[50%] md:w-[33.33%] h-fit flex justify-center">
            <div className="p-2 sm:p-3 duration-200">
              <Image src={KomporListrik} alt="kompor listrik" />
            </div>
          </div>
          <div className="sm:w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200">
              <Image src={LilinBatik} alt="lilin batik" />
            </div>
          </div>
          <div className="sm:w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200">
              <Image src={PewarnaBatik} alt="pewarna batik" />
            </div>
          </div>
          <div className="sm:w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200">
              <Image src={Waterglass} alt="waterglass" />
            </div>
          </div>
          <div className="sm:w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200">
              <Image src={KainKatunPrimissima} alt="kain katun primissima" />
            </div>
          </div>
          <div className="w-full h-auto py-10 lg:mb-20 flex flex-col items-center justify-center">
            <p className="font-poppins-bold text-center text-blue-main py-3 lg:pb-7 text-md md:text-[2vw]">
              Untuk pemesanan dan informasi lebih lanjut, silakan hubungi kami.
            </p>
            <Link href={`https://wa.me/+6281346241922`} target="_blank">
              <div className="flex w-32 lg:w-[calc(8rem+3vw)] h-9 lg:h-[calc(2.25rem+.8vw)] rounded-md bg-blue-main justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
                <h1 className="text-white-main font-poppins text-[.8rem] lg:text-[calc(.8rem+.2vw)] font-semibold tracking-wider">
                  Hubungi Kami
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

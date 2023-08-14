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
      <div className="relative w-full h-auto pt-28 pb-5 flex flex-col justify-center items-center  border border-red-600">
        <div className="w-[90%] h-[90%] flex flex-wrap items-center  border border-red-600">
          <div className="w-[50%] md:w-[33.33%] h-fit flex justify-center">
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={Canting} alt="canting" />
            </div>
          </div>
          <div className="w-[50%] md:w-[33.33%] h-fit flex justify-center">
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={KomporListrik} alt="kompor listrik" />
            </div>
          </div>
          <div className="w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={LilinBatik} alt="lilin batik" />
            </div>
          </div>
          <div className="w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={PewarnaBatik} alt="pewarna batik" />
            </div>
          </div>
          <div className="w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={Waterglass} alt="waterglass" />
            </div>
          </div>
          <div className="w-[50%] md:w-[33.33%] flex justify-center">
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={KainKatunPrimissima} alt="kain katun primissima" />
            </div>
          </div>
          <div className="w-full h-auto py-10 flex flex-col items-center justify-center border border-red-600">
            <p className="font-poppins-bold text-center text-blue-main py-3">
              Untuk pemesanan dan informasi lebih lanjut, silakan hubungi kami.
            </p>
            <Link href={`https://wa.me/+6281346241922`} target="_blank">
              <div className="flex w-32 lg:w-[calc(8rem+2vw)] h-9 lg:h-[calc(2.25rem+.5vw)] rounded-md bg-blue-main justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
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

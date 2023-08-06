import Image from "next/image";
import Link from "next/link";

import HeroImage from "@/public/images/Hero-image.png";
import Tagline from "@/public/layers/Tagline.png";
import Gerigi from "@/public/layers/Gerigi.png";

export default function HeroBeranda() {
  return (
    <>
      <div className="relative w-screen h-screen md:h-auto pt-20 md:pt-28 flex justify-center items-center overflow-hidden">
        <div className="w-[80%] lg:w-[90%] h-[85%] lg:h-[90%] flex flex-col lg:flex-row justify-center items-center">
          {/* @Hero Image */}
          <div className="w-full h-1/2 md:h-2/3 lg:h-full flex justify-center items-center">
            <div className="h-full w-full flex justify-center items-center">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="bg-transparent w-80 md:w-96 lg:w-[40vw]"
              />
            </div>
          </div>

          {/* @Tagline */}
          <div className="w-full h-1/2 md:h-1/3 lg:h-full flex flex-col justify-evenly items-center">
            <div className="w-full flex justify-center py-2 lg:hidden">
              <Image
                src={Gerigi}
                alt="Gerigi"
                className="bg-transparent w-20 md:w-24"
              />
            </div>

            <div className="w-full flex justify-center py-2 lg:py-5 lg:justify-start lg:pl-10">
              <Image
                src={Tagline}
                alt="Tagline"
                className="bg-transparent w-80 md:w-96 lg:w-[30vw]"
              />
            </div>

            <div className="flex py-2 gap-5 md:pb-5 w-full justify-center lg:justify-start lg:pl-10">
              <Link href="/kontak">
                <div className="w-32 lg:w-[calc(8rem+2vw)] h-9 lg:h-[calc(2.25rem+.5vw)] rounded-md bg-blue-main flex justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
                  <h1 className="text-white-main font-poppins text-[.8rem] lg:text-[calc(.8rem+.2vw)] font-semibold tracking-wider">
                    Hubungi Kami
                  </h1>
                </div>
              </Link>
              <Link href="/produk">
                <div className="hidden w-[calc(12rem+2vw)] h-9 lg:h-[calc(2.25rem+.5vw)] rounded-md bg-blue-main lg:flex justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
                  <h1 className="text-white-main font-poppins text-[.8rem] lg:text-[calc(.8rem+.2vw)] font-semibold tracking-wider">
                    Produk dan Layanan
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

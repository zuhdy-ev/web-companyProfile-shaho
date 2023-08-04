import Image from "next/image";

import HeroImage from "@/public/images/Hero-image.png";
import Tagline from "@/public/layers/Tagline.png";
import Gerigi from "@/public/layers/Gerigi.png";
import ContactButton from "@/public/icons/Tombol_ Hubungi Kami.png";
import ProductButton from "@/public/icons/Tombol_ Produk dan Layanan.png";

export default function HeroBeranda() {
  return (
    <>
      <div className="relative w-screen h-screen md:h-auto pt-20 md:pt-28 flex justify-center items-center">
        <div className="w-[80%] lg:w-[90%] h-[85%] lg:h-[90%] flex flex-col lg:flex-row justify-center items-center">
          {/* Content atas */}
          <div className="w-full h-1/2 md:h-2/3 lg:h-full flex justify-center items-center">
            <div className="h-full w-full flex justify-center items-center">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="bg-transparent w-80 md:w-96 lg:w-[40vw]"
              />
            </div>
          </div>

          {/* Content bawah */}
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
            <div className="flex py-2 lg:py-5 w-full justify-center lg:justify-start lg:pl-10">
              <Image
                src={ContactButton}
                alt="Contact Button"
                className="bg-transparent w-24 md:w-28 lg:w-[11vw]"
              />
              <Image
                src={ProductButton}
                alt="Product Button"
                className="bg-transparent w-24 md:w-28 lg:w-[13vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

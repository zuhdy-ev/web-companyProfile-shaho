import Image from "next/image";
import Link from "next/link";

import batikTulis from "@/public/images/cards/card1_batikTulis.png";
import batikCap from "@/public/images/cards/card2_batikCap.png";
import batikKombinasi from "@/public/images/cards/card3_batikKombinasi.png";
import batikPrinting from "@/public/images/cards/card4_batikPrinting.png";
import kursusMembatik from "@/public/images/cards/card5_kursusMembatik.png";
import peralatanMembatik from "@/public/images/cards/card6_peralatanMembatik.png";

export default function ListProducts() {
  return (
    <>
      <div className="w-[88%] max-w-[70rem] h-full flex flex-wrap overflow-hidden">
        <div className="w-[50%] md:w-[33.33%] h-fit flex justify-center">
          <Link href={"/produk/batik-tulis"}>
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={batikTulis} alt="batik tulis" />
            </div>
          </Link>
        </div>
        <div className="w-[50%] md:w-[33.33%] h-fit flex justify-center">
          <Link href={"/produk/batik-cap"}>
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={batikCap} alt="batik cap" />
            </div>
          </Link>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <Link href={"/produk/batik-kombinasi"}>
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={batikKombinasi} alt="batik kombinasi" />
            </div>
          </Link>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <Link href={"/produk/batik-printing"}>
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={batikPrinting} alt="batik printing" />
            </div>
          </Link>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <Link href={"/produk/kursus-membatik"}>
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={kursusMembatik} alt="kursus membatik" />
            </div>
          </Link>
        </div>
        <div className="w-[50%] md:w-[33.33%] flex justify-center">
          <Link href={"/produk/alat-membatik"}>
            <div className="p-2 sm:p-3 duration-200 hover:-translate-y-3 hover:opacity-80 cursor-pointer">
              <Image src={peralatanMembatik} alt="alat membatik" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

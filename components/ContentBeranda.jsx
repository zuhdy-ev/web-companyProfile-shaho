import Image from "next/image";
import Link from "next/link";

import advBahan from "@/public/layers/Adv-1.png";
import advWarna from "@/public/layers/Adv-2.png";
import advHarga from "@/public/layers/Adv-3.png";
import advBahanLg from "@/public/layers/Adv-1-Lg.svg";
import advWarnaLg from "@/public/layers/Adv-2-Lg.svg";
import advHargaLg from "@/public/layers/Adv-3-Lg.svg";
import gerigiSM1 from "@/public/layers/Gerigi-sm-1.svg";

export default function ContentBeranda() {
  return (
    <>
      <div className="relative w-full h-auto py-8">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          {/* 1 - Mobile */}
          <div className="w-[80vw] h-40 p-5 rounded-lg bg-blue-main-2 flex justify-center items-center lg:hidden">
            <h1 className="text-white-main font-poppins-bold text-xl text-center">
              Solusi terbaik untuk kebutuhan batik Anda.
            </h1>
          </div>

          {/* 2 - Mobile */}
          <div className="w-full h-auto my-10 flex flex-col items-center lg:hidden">
            <div className="w-[60vw] h-[40vw] max-w-[18rem] max-h-[13rem] flex justify-center items-center">
              <Image
                src={advBahan}
                alt="Adv Bahan"
                className="h-[70%] w-auto max-w-[18rem] max-h-[13rem]"
              />
            </div>
            <div className="w-[60vw] h-[40vw] max-w-[18rem] max-h-[13rem] flex justify-center items-center">
              <Image
                src={advWarna}
                alt="Adv Warna"
                className="h-[70%] w-auto max-w-[18rem] max-h-[13rem]"
              />
            </div>
            <div className="w-[60vw] h-[40vw] max-w-[18rem] max-h-[13rem] flex justify-center items-center">
              <Image
                src={advHarga}
                alt="Adv Harga"
                className="h-[70%] w-auto max-w-[18rem] max-h-[13rem]"
              />
            </div>
          </div>

          {/* 1 & 2 - Tab/Laptop  */}
          <div className="hidden lg:flex w-full h-[28vw] justify-center items-center">
            {/* Container */}
            <div className="w-[85%] h-[80%] rounded-xl flex overflow-hidden">
              {/* Left */}
              <div className="w-[40%] bg-blue-main flex justify-center items-center">
                {/* Content */}
                <div className="w-[80%] h-[80%] ">
                  <div className="w-full h-1/6  -translate-x-5">
                    <Image
                      src={gerigiSM1}
                      alt="Hiasan gerigi"
                      className="w-[40%]"
                    />
                  </div>
                  <div className="w-full h-3/6  flex justify-center items-center">
                    <h1 className="text-white-main font-poppins-bold text-[2.2vw] text-start">
                      Solusi terbaik untuk kebutuhan batik Anda.
                    </h1>
                  </div>
                  <div className="w-full h-2/6 ">
                    <Link href={`https://wa.me/+6281346241922`} target="_blank">
                      <div className="w-[45%] h-[45%] rounded-sm bg-white-main flex justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
                        <h1 className="text-blue-main font-poppins text-[1vw] font-semibold tracking-wider">
                          Hubungi Kami
                        </h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="relative w-[60%] bg-blue-main-2 flex justify-center items-center">
                <div className="w-[90%] h-[80%]  flex">
                  <div className="w-1/3  flex justify-center items-center">
                    <Image
                      src={advBahanLg}
                      alt="Adv Bahan Large"
                      className="w-[80%]"
                    />
                  </div>
                  <div className="w-1/3  flex justify-center items-center">
                    <Image
                      src={advWarnaLg}
                      alt="Adv Warna Large"
                      className="w-[80%]"
                    />
                  </div>
                  <div className="w-1/3  flex justify-center items-center">
                    <Image
                      src={advHargaLg}
                      alt="Adv Harga Large"
                      className="w-[80%]"
                    />
                  </div>
                </div>
                <div className="absolute w-[25%] h-[20%] bottom-0 right-0">
                  <Image
                    src={gerigiSM1}
                    alt="Hiasan gerigi"
                    className="w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="w-full h-fit py-5 lg:h-[30vw] bg-blue-main-2 text-white-main flex items-center justify-center">
            <div className="w-[90%] h-[70%] flex flex-col items-center justify-center">
              <h1 className="font-poppins-bold text-lg lg:text-[2vw] text-center mb-5 lg:leading-[3vw]">
                Temukan beragam pilihan bahan, model, motif, dan warna yang
                sesuai dengan kebutuhan anda. <br />
                <span className="text-[#EC994B]">
                  Hubungi kami untuk mendapatkan penawaran terbaik.
                </span>
              </h1>
              <Link href={`https://wa.me/+6281346241922`}>
                <div className="w-40 lg:w-[calc(10rem+5vw)] h-12 lg:h-[calc(3rem+.5vw)] rounded-md bg-white-main flex justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
                  <h1 className="text-blue-main font-poppins text-[1rem] lg:text-[calc(1rem+.2vw)] font-semibold tracking-wider">
                    Hubungi Kami
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

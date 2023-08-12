import Image from "next/image";
import Hero from "@/public/layers/HeroTentang.png";

import Foto from "@/public/images/FotoPakSupratono.png";

export default function HeroTentang() {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center pt-24 lg:pt-20">
        {/* Welcome */}
        <div className="w-full h-[20vw] md:h-[15vw] flex justify-center items-center">
          <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-fit flex justify-center items-center">
            <Image src={Hero} alt="Hero" />
          </div>
        </div>

        {/* Hero section */}
        <div className="w-full h-full flex justify-center items-center">
          {/* Container */}
          <div className="w-[90%] h-[95%] py-10 lg:h-auto flex flex-col">
            {/* Header */}
            <div className="w-full h-auto flex flex-col justify-center items-center py-3 lg:hidden">
              <h1 className="text-[#73777B] lg:text-[1.5vw]">
                PERINTIS BATIK SHAHO
              </h1>
              <br />
              <hr className="w-[40vw] border-[#73777B]" />
            </div>
            {/* Body */}
            <div className="w-full h-full flex flex-col lg:flex-row-reverse">
              {/* Photo */}
              <div className="w-full h-1/2 lg:h-full flex justify-center items-center py-3">
                <div className="w-80 sm:w-96 lg:w-[40vw] h-full flex justify-center items-center lg:items-start">
                  <div className="w-full border-[3px] lg:border-[10px] border-[#D9D9D9] rounded-lg">
                    <Image src={Foto} alt="Pak Supratono" className="" />
                  </div>
                </div>
              </div>
              {/* Caption */}
              <div className="w-full h-1/2 lg:h-full flex justify-center py-3">
                <div className="w-[25rem] lg:w-full flex flex-col justify-center md:items-center lg:items-start">
                  <div className="hidden lg:flex flex-col py-5 ">
                    <h1 className="text-[#73777B] lg:text-[1.5vw] pb-5">
                      PERINTIS BATIK SHAHO
                    </h1>
                    <hr className="w-[40vw] border-[#73777B]" />
                  </div>
                  <h1 className="text-center lg:text-justify lg:text-[1.5vw] text-blue-main">
                    Batik SHAHO didirikan oleh Pak Supratono dan keluarga pada
                    tahun 1990. Nama SHAHO sendiri diambil dari nama depan
                    seluruh anggota keluarga beliau: Supratono, Haryati (istri),
                    Ardi, Hendri, dan Oki. Mulai dari mengerjakan pesanan
                    sablonan hingga produk-produk lainnya, Batik SHAHO tumbuh
                    dan saat ini sedang mempersiapkan diri untuk mengekspor
                    batik Indonesia.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

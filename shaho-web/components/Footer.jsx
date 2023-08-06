import Image from "next/image";
import Link from "next/link";

import logoShaho from "@/public/logo/logoShaho.svg";
import logoInstagram from "@/public/icons/IG-logo.svg";
import logoWhatsApp from "@/public/icons/WA-logo.svg";
import logoEmail from "@/public/icons/Email-logo.svg";
import logoTiktok from "@/public/icons/Tiktok-logo.svg";

export default function Footer() {
  return (
    <>
      <div className="relative w-full h-auto lg:h-[25vw] lg:max-h-[25rem] flex flex-col lg:flex-row">
        {/* Logo */}
        <div className="w-full h-auto py-3 lg:w-1/4 lg:h-full flex justify-center items-center lg:items-start lg:pt-10">
          <div className="hover:opacity-70 duration-200">
            <Link href={`/beranda`}>
              <Image
                src={logoShaho}
                width={130}
                height={20}
                alt="Logo Shaho"
                className="bg-transparent w-[30vw] lg:w-[15vw]"
              />
            </Link>
          </div>
        </div>

        {/* Alamat */}
        <div className="w-full h-auto lg:w-1/4 lg:pt-12 lg:px-3 lg:h-full flex justify-center">
          {/* Container */}
          <div className="w-[65vw] pb-5 h-full">
            {/* Header */}
            <h1 className="font-poppins-extrabold text-gray-500 text-md md:text-2xl">
              Alamat
            </h1>
            {/* Content */}
            <h1 className="font-poppins text-blue-main text-sm md:text-lg">
              Jl. LKMD No. 45 RT. 5, Batu Ampar, Kec. Balikpapan Utara, Kota
              Balikpapan, Kalimantan Timur, Indonesia 76126.
            </h1>
          </div>
        </div>
        
        {/* Kontak */}
        <div className="w-full h-auto lg:w-1/4 lg:pt-12 lg:px-3 lg:h-full flex justify-center">
          {/* Container */}
          <div className="w-[65vw] h-full pb-5">
            {/* Header */}
            <h1 className="font-poppins-extrabold text-gray-500 text-md md:text-2xl">
              Kontak
            </h1>
            {/* WA */}
            <div className="flex items-center my-2 gap-3">
              <Image
                src={logoWhatsApp}
                width={30}
                height={30}
                alt="Logo WA"
                className="md:w-10"
              />
              <h1 className="font-poppins text-blue-main text-sm md:text-[1rem]">
                +62 813 4624 1922
              </h1>
            </div>
            {/* Email */}
            <div className="flex items-center my-2 gap-3">
              <Image
                src={logoEmail}
                width={30}
                height={30}
                alt="Logo WA"
                className="md:w-10"
              />
              <h1 className="font-poppins text-blue-main text-sm md:text-[1rem]">
                batikshaho@gmail.com
              </h1>
            </div>
          </div>
        </div>

        

        {/* Media Sosial */}
        <div className="w-full h-auto pb-14 lg:pb-0 lg:pt-12 lg:px-3 lg:w-1/4 lg:h-full flex justify-center">
          {/* Container */}
          <div className="w-[65vw] h-full">
            {/* Header */}
            <h1 className="font-poppins-extrabold text-gray-500 text-md md:text-2xl">
              Media Sosial
            </h1>
            {/* Instagram */}
            <div className="flex items-center my-2 gap-3">
              <Link href={`https://www.instagram.com/batik_shahokaltim/`} target="_blank">
                <Image
                  src={logoInstagram}
                  width={30}
                  height={30}
                  alt="Logo IG"
                  className="md:w-10 hover:scale-105"
                />
              </Link>
              <h1 className="font-poppins text-blue-main text-sm md:text-[1rem]">
                @batik_shahokaltim
              </h1>
            </div>
            {/* Tiktok */}
            <div className="flex items-center my-2 gap-3">
              <Link href={`https://www.tiktok.com/@batikshaho`} target="_blank">
                <Image
                  src={logoTiktok}
                  width={30}
                  height={30}
                  alt="Logo Tiktok"
                  className="md:w-10 hover:scale-105"
                />
              </Link>
              <h1 className="font-poppins text-blue-main text-sm md:text-[1rem]">
                @batikshaho
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

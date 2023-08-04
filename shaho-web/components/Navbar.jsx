"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logoShaho from "@/public/logo/logoShaho.svg";
import burgerMenu from "@/public/icons/burgerMenu.svg";
import closeMenu from "@/public/icons/closeMenu.png";
import logoInstagram from "@/public/logo/logoInstagram-Nav.png";
import logoWhatsApp from "@/public/logo/logoWhatsApp-Nav.png";

const menuItems = [
  {
    name: "Beranda",
    status: "beranda",
    link: "/beranda",
  },
  {
    name: "Produk dan Layanan",
    status: "produk",
    link: "/produk",
  },
  {
    name: "Blog",
    status: "blog",
    link: "/blog",
  },
  {
    name: "SHAHO",
    status: "tentang",
    link: "/tentang",
  },
];

export default function Navbar(condition) {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar((prevNavbar) => !navbar);
  };

  return (
    <>
      <div className="z-[999]">
        {/* @Main Navbar */}
        <div className="absolute bg-[#FFFFFF] w-full h-20 flex justify-center items-center drop-shadow-lg">
          {/* --- Content --- */}
          <div className="w-[90%] md:w-[95%] h-[85%] flex justify-between items-center">
            {/* Right */}
            <div className="hover:opacity-70 duration-200">
              <Link href={`/beranda`}>
                <Image
                  src={logoShaho}
                  width={130}
                  height={20}
                  alt="Logo Shaho"
                  className="bg-transparent"
                />
              </Link>
            </div>

            {/* Center */}
            <div className="hidden lg:flex">
              {menuItems.map(({ name, status, link }) => (
                <div key={name} className="">
                  <Link href={link}>
                    <h1
                      className={`text-blue-main font-poppins font-medium mx-10 ${
                        condition.status == status ? "font-semibold" : ""
                      }`}
                    >
                      {name}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>

            {/* Left */}
            <button>
              {/* active on laptop & pc */}
              <div className="hidden lg:block">
                <Link href="/kontak">
                  <h1 className="w-[15vw] max-w-[9rem] h-10 rounded-lg bg-blue-main text-white-main font-poppins text-sm font-medium flex justify-center items-center hover:opacity-60 duration-200">
                    Hubungi Kami
                  </h1>
                </Link>
              </div>
              {/* active on mobile & tab */}
              <div className="lg:hidden" onClick={toggleNavbar}>
                <Image
                  src={burgerMenu}
                  width={25}
                  height={30}
                  alt="Menu Button"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Sidebar for tab & mobile */}
        <div
          className={`absolute w-[100vw] h-[100vh] lg:right-0 bg-[#1B1E23] z-[99] flex justify-center items-center ${
            navbar ? "" : "translate-y-[-100%]"
          } duration-500 lg:hidden`}
        >
          {/* --- Content --- */}
          <div className="absolute w-[80%] h-[85%]  flex justify-center flex-col">
            {/* Close button */}
            <div className=" h-[15%] w-full flex justify-center">
              <h1 className="font-sans font-bold text-white-main text-xl">
                BATIK SHAHO
              </h1>
              <Image
                src={closeMenu}
                width={16}
                height={16}
                alt="Close Menu Button"
                className="absolute top-0 right-0 mt-2"
                onClick={toggleNavbar}
              />
            </div>

            {/* Menu */}
            <div className="h-[50%] grid grid-rows-5 items-center">
              {menuItems.map(({ name, status, link }) => (
                <div key={name}>
                  <Link href={link}>
                    <div
                      className={`font-sans font-thin text-lg text-white-main ${
                        condition.status == status
                          ? "font-semibold text-yellow-300"
                          : ""
                      }`}
                    >
                      <h1>{name}</h1>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="w-full flex justify-center py-4">
              <hr className="w-[99.9%]" />
            </div>
            <div className="w-full h-[35%] flex gap-5 pt-7">
              <div>
                <Image
                  src={logoInstagram}
                  width={25}
                  height={25}
                  alt="Logo Instagram Navbar"
                />
              </div>
              <div>
                <Image
                  src={logoWhatsApp}
                  width={25}
                  height={25}
                  alt="Logo WhatsApp Navbar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

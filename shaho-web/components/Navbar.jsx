import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="">
        <div className="absolute bg-[#FFFFFF] w-full h-20 flex justify-between px-10 box-border items-center">
          <Link href={`/`}>
            <Image
              src={`logo/logoShaho.svg`}
              width={130}
              height={20}
              alt="Logo Shaho"
              className="bg-transparent"
            />
          </Link>

          <button>
            <Image
              src={`icons/burgerMenu.svg`}
              width={25}
              height={30}
              alt="Menu Button"
            />
          </button>
        </div>

        <div className="absolute w-screen h-screen bg-[#1B1E23] z-[99] flex justify-center items-center">
          <div className="absolute w-[80%] h-[85%] text-slate-100 flex justify-center flex-col">
            <div className=" h-[15%] w-full flex justify-center">
              <h1 className="font-sans font-bold text-xl">BATIK SHAHO</h1>
              <Image
                src="/icons/closeMenu.png"
                width={16}
                height={16}
                alt="Close Menu Button"
                className="absolute top-0 right-0 mt-2"
              />
            </div>

            <div className="h-[50%] grid grid-rows-5 font-sans font-thin text-lg items-center">
              <div className="">
                <h1>Beranda</h1>
              </div>
              <div className="">
                <h1>Produk dan Layanan</h1>
              </div>
              <div className="">
                <h1>Blog</h1>
              </div>
              <div className="">
                <h1>Tentang</h1>
              </div>
              <div className="">
                <h1>Hubungi Kami</h1>
              </div>
            </div>

            <div className="w-full flex justify-center py-4">
              <hr className="w-[99.9%]" />
            </div>
            <div className="w-full h-[35%] flex gap-5 pt-7">
              <div>
                <Image
                  src="/logo/logoInstagram-Nav.png"
                  width={25}
                  height={25}
                  alt="Logo Instagram Navbar"
                />
              </div>
              <div>
                <Image
                  src="/logo/logoWhatsApp-Nav.png"
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

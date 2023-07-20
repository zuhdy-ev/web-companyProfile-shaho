import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="">
        {/* Sidebar Inactive */}
        <div className="absolute bg-[#FFFFFF] w-full h-20 flex justify-between px-10 box-border items-center">
          {/* Logo */}
          <Link href={`/`}>
            <Image
              src={`logo/logoShaho.svg`}
              width={130}
              height={20}
              alt="Logo Shaho"
              className="bg-transparent"
            />
          </Link>

          {/* Burger Menu */}
          <button>
            <Image
              src={`icons/burgerMenu.svg`}
              width={25}
              height={30}
              alt="Menu Button"
            />
          </button>
        </div>

        {/* Sidebar Active */}
        <div className="absolute w-screen h-screen bg-[#1B1E23] z-[99] flex justify-center items-center">
          <div className="absolute w-[80%] h-[85%] border border-slate-100 text-slate-100 font-poppins flex justify-center flex-col">
            {/* Top */}
            <div className="bg-slate-600 h-[15%] flex justify-center">
              <h1 className="font-bold text-2xl">BATIK SHAHO</h1>
              <h1 className="absolute top-0 right-0 font-bold text-2xl">❌</h1>
            </div>

            {/* Mid */}
            <div className="h-[50%] bg-slate-500 grid grid-rows-5 font-poppins font-extralight text-xl">
              <div className="bg-slate-700">
                <h1>Beranda</h1>
              </div>
              <div className="bg-slate-300">
                <h1>Produk dan Layanan</h1>
              </div>
              <div className="bg-slate-800">
                <h1>Blog</h1>
              </div>
              <div className="bg-black">
                <h1>Tentang</h1>
              </div>
              <div className="bg-slate-300">
                <h1>Hubungi Kami</h1>
              </div>
            </div>

            {/* Bottom */}
            <div className="h-[35%] bg-slate-400"></div>
          </div>
        </div>
      </div>
    </>
  );
}

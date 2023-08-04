import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function beranda() {
  return (
    <>
      <Navbar status="beranda"/>
      <div className="w-full h-screen flex justify-center items-center text-xl">Beranda</div>
      {/* <div className="bg-slate-600 w-full h-[calc(100vh-4rem)] flex text-slate-100">
        <div className="translate-y-16">
          <Image
            src={`/img/Hero-image.png`}
            width={500}
            height={500}
            alt="Hero Image"
            className="bg-transparent"
          />
        </div>
      </div> */}
    </>
  );
}

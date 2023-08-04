import Navbar from "@/components/Navbar";
import HeroBeranda from "@/components/HeroBeranda";

export default function beranda() {
  return (
    <>
      <Navbar status="beranda"/>
      <HeroBeranda />
      {/* <div className="w-full h-screen flex justify-center items-center text-xl">Beranda</div> */}
    </>
  );
}

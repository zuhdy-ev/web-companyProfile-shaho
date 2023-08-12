import Navbar from "@/components/Navbar";
import HeroBeranda from "@/components/HeroBeranda";
import ProdukBeranda from  "@/components/ProductBeranda";
import ContentBeranda from "@/components/ContentBeranda";

export default function beranda() {
  return (
    <>
      <Navbar status="beranda"/>
      <HeroBeranda />
      <ProdukBeranda />
      <ContentBeranda />
    </>
  );
}

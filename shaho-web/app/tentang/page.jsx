import Navbar from "@/components/Navbar";
import HeroTentang from "@/components/HeroTentang";
import ContentTentang from "@/components/ContentTentang";

export default function tentang() {
  return (
    <>
      <Navbar status="tentang"/>
      <HeroTentang />
      <ContentTentang />
    </>
  );
}

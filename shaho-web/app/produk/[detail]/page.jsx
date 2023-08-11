import Navbar from "@/components/Navbar";
import HeroDetail from "@/components/HeroDetail";
import ContentDetail from "@/components/ContentDetail";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
        <HeroDetail />
        <ContentDetail />
      </div>
    </>
  );
}

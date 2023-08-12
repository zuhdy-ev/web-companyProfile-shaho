// "use client"
// import { useRouter } from "next/router";
// import { useState } from "react";


import Navbar from "@/components/Navbar";
import HeroDetail from "@/components/HeroDetail";
import ContentDetail from "@/components/ContentDetail";

export default function page() {
  // const router = useRouter();
  // const { id } = router.query;
  // const [data, setData] = useState(null);

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

//         <ContentDetail gallery={data.productGallery} />

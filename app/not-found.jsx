import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function notFound() {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="font-poppins-bold font-blue-main-2 sm:text-[2.2vw] text-center">Maaf, halaman ini belum tersedia.</div>
        </div>
        <Footer className="bottom-0"/>
      </div>
    </>
  );
}

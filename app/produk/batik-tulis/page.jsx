import Link from "next/link";
import Image from "next/image";

import ListProducts from "@/components/ListProducts";
import sample from "@/public/images/galeri-detail/batikTulis/sample.png";
import Navbar from "@/components/Navbar";
// import HeroDetail from "@/components/HeroDetail";
// import ContentDetail from "@/components/ContentDetail";

export default function page() {
  return (
    <>
      <Navbar />
      {/* @Hero Detail */}
      <div className="w-full h-auto relative flex justify-center items-start py-28 md:pt-32 lg:pt-40">
        <div className="w-[90%] flex flex-col items-center lg:items-start">
          <div className="w-full lg:hidden h-auto py-2 lg:pl-3 flex justify-center items-center lg:justify-start">
            <h1 className="font-poppins-bold text-2xl lg:text-[2.5vw] text-blue-main-2">
              BATIK TULIS
            </h1>
          </div>
          <div className="w-full h-auto flex flex-col lg:flex-row-reverse justify-center items-center lg:items-start">
            <div className="w-full lg:w-auto h-auto py-2 flex justify-center items-center">
              <div className="w-72 sm:w-96 h-72 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-md">
                <Image src={sample} alt="sample" className="w-full h-full" />
              </div>
            </div>
            <div className="max-w-full lg:w-2/3">
              <div className="hidden w-full h-auto py-2 lg:pl-3 lg:flex justify-center items-center lg:justify-start">
                <h1 className="font-poppins-bold text-2xl lg:text-[2.5vw] text-blue-main-2">
                  BATIK TULIS
                </h1>
              </div>
              <div className="w-auto sm:w-[30rem] md:w-[35rem] lg:w-auto h-auto p-3">
                <h1 className="text-center lg:text-start font-poppins text-blue-main text-md sm:text-lg xl:text-xl">
                  Batik Tulis adalah batik yang secara teknis dibuat langsung
                  dengan cara menuliskan/melukiskan lilin di atas kain hingga
                  menghasilkan karya unik yang elegan. Batik Tulis ini cocok
                  dijadikan kaos, kemeja, taplak, selendang, maupun
                  bentuk-bentuk sandang lainnya.
                </h1>
              </div>
              <div className="w-auto h-auto flex justify-center items-center lg:justify-start p-3">
                <Link href={`https://wa.me/+6281346241922`} target="_blank">
                  <div className="flex w-32 lg:w-[calc(8rem+2vw)] h-9 lg:h-[calc(2.25rem+.5vw)] rounded-md bg-blue-main justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
                    <h1 className="text-white-main font-poppins text-[.8rem] lg:text-[calc(.8rem+.2vw)] font-semibold tracking-wider">
                      Hubungi Kami
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* @ContentDetail */}
      <div className="relative w-full h-auto flex justify-center items-center">
        <div className="w-[90%] h-auto border-t-2 border-blue-main-2">
          {/* Note (for all menu except Kursus Membatik) */}
          <div className="w-full max-w-[50rem] py-7 h-auto">
            <div className="w-full h-auto py-2 flex flex-col md:flex-row justify-center items-center">
              <p className="font-poppins-bold text-[#ADACC9] w-full h-full text-center md:text-start text-md sm:text-lg xl:text-xl">
                JENIS KAIN
              </p>
              <p className="font-poppins-bold text-blue-main w-full h-full text-center md:text-start text-md sm:text-lg xl:text-xl">
                Katun 100%
              </p>
            </div>
            <div className="w-full h-auto py-2 flex flex-col md:flex-row">
              <p className="font-poppins-bold text-[#ADACC9] w-full h-full text-center md:text-start text-md sm:text-lg xl:text-xl">
                UKURAN KAIN (/potong)
              </p>
              <div className="w-full h-full">
                <p className="font-poppins-bold text-blue-main w-full h-full text-center md:text-start text-md sm:text-lg xl:text-xl">
                  Panjang: 120cm
                </p>
                <p className="font-poppins-bold text-blue-main w-full h-full text-center md:text-start text-md sm:text-lg xl:text-xl">
                  Lebar: 150cm
                </p>
              </div>
            </div>
            <div className="w-full lg:w-fit h-auto p-2 flex flex-col justify-center items-center">
              <p className="text-center md:text-start font-poppins-bold text-[#EC994B] text-md sm:text-lg xl:text-xl">
                *Harga dan durasi pengerjaan disesuaikan dengan kerumitan motif
                dan jumlah yang dipesan
              </p>
            </div>
          </div>
          {/* Photos */}
          <div className="w-full flex flex-col py-7 border-t-2 border-blue-main-2">
            <p className="w-full text-center font-poppins-bold text-blue-main py-3 text-md sm:text-xl">
              BEBERAPA CONTOH MOTIF
            </p>
            <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center py-3">
              <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2">
                <Image src={sample} alt="sample" />
              </div>
              <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2">
                <Image src={sample} alt="sample" />
              </div>
              <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2">
                <Image src={sample} alt="sample" />
              </div>
              <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2">
                <Image src={sample} alt="sample" />
              </div>
            </div>
          </div>
          {/* Produk lainnya */}
          <div className="w-full h-auto flex flex-col justify-center items-center pt-7 pb-16 border-t-2 border-blue-main-2">
            <p className="w-full text-center font-poppins-bold text-blue-main py-3 text-md sm:text-xl">
              PRODUK DAN LAYANAN LAINNYA
            </p>
            <ListProducts />
          </div>
        </div>
      </div>
      {/* <HeroDetail /> */}
      {/* <ContentDetail /> */}
    </>
  );
}

import Image from "next/image";
import ListProducts from "./ListProducts";
import data from "@/data/data.json"

import sample from "@/public/images/galeri-detail/batikTulis/sample.png";
import card1 from "@/public/images/galeri-detail/kurusMembatik/CARD-1.png";
import card2 from "@/public/images/galeri-detail/kurusMembatik/CARD-2.png";
import card3 from "@/public/images/galeri-detail/kurusMembatik/CARD-3.png";

export default function ContentDetail( {gallery}) {
  return (
    <>
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
          {/* Note (only for Kursus Membatik) */}
          {/* <div className="w-full py-7 h-auto flex flex-col md:flex-row md:flex-wrap justify-center items-center">
            <p className="w-full text-center font-poppins-bold text-blue-main py-3 text-md sm:text-xl">
              PAKET YANG DITAWARKAN
            </p>
            <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2 rounded-lg">
              <Image src={card1} alt="card1" />
            </div>
            <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2 rounded-lg">
              <Image src={card2} alt="card2" />
            </div>
            <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2 rounded-lg">
              <Image src={card3} alt="card3" />
            </div>
          </div> */}
          {/* Photos */}
          <div className="w-full flex flex-col py-7 border-t-2 border-blue-main-2">
            <p className="w-full text-center font-poppins-bold text-blue-main py-3 text-md sm:text-xl">
              BEBERAPA CONTOH MOTIF
            </p>
            <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center py-3">
              <div className="w-60 sm:w-64 md:w-72 lg:w-96 m-2">
                {/* {data.map((data) => data.productGallery)} */}
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
    </>
  );
}

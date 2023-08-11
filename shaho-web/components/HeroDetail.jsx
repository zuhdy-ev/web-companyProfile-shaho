import Link from "next/link";
import Image from "next/image";
import data from "@/data/data.json";

import sample from "@/public/images/galeri-detail/batikTulis/sample.png";

export default function HeroDetail() {
  return (
    <>
      <div className="w-full h-auto relative flex justify-center items-start py-28 md:pt-32 lg:pt-40">
        <div className="w-[90%] flex flex-col items-center lg:items-start">
          <div className="w-full lg:hidden h-auto py-2 lg:pl-3 flex justify-center items-center lg:justify-start">
            <h1 className="font-poppins-bold text-2xl lg:text-[2.5vw] text-blue-main-2">
              {data.map((data) => (
                <>{data.productName.toUpperCase()}</>
              ))}
            </h1>
          </div>
          <div className="w-full h-auto flex flex-col lg:flex-row-reverse justify-center items-center lg:items-start">
            <div className="w-full lg:w-1/2 h-auto py-2 flex justify-center items-center">
              <div className="w-72 sm:w-96 h-72 sm:h-96 lg:w-[30vw] lg:h-[30vw] max-w-[35rem] max-h-[35rem] rounded-md">
                <Image src={sample} alt="sample" />
              </div>
            </div>
            <div className="max-w-full lg:w-1/2">
              <div className="hidden w-full h-auto py-2 lg:pl-3 lg:flex justify-center items-center lg:justify-start">
                <h1 className="font-poppins-bold text-2xl lg:text-[2.5vw] text-blue-main-2">
                  {data.map((data) => (
                    <>{data.productName.toUpperCase()}</>
                  ))}
                </h1>
              </div>
              <div className="w-auto sm:w-[30rem] md:w-[35rem] lg:w-auto h-auto p-3">
                <h1 className="text-center lg:text-start font-poppins text-blue-main text-md sm:text-lg xl:text-xl">
                  {data.map((data) => data.productDesc)}
                </h1>
              </div>
              <div className="w-auto h-auto flex justify-center items-center lg:justify-start p-3">
                <Link href="/kontak">
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
    </>
  );
}

{
  /*
  <div className="w-full h-auto py-2 flex justify-center items-center border border-red-600">
    <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-md bg-slate-500"></div>
  </div>
  <div className="w-96 max-w-full sm:w-[30rem] md:w-[35rem] h-auto py-2 border border-red-600">
    <h1 className="text-center font-poppins text-blue-main">
      Batik Tulis adalah batik yang secara teknis dibuat langsung dengan
      cara menuliskan/melukiskan lilin di atas kain hingga menghasilkan
      karya unik yang elegan. Batik Tulis ini cocok dijadikan kaos,
      kemeja, taplak, selendang, maupun bentuk-bentuk sandang lainnya.
    </h1>
  </div>
  <div className="w-auto h-auto py-2 border border-red-600">
    <Link href="/kontak">
      <div className="flex w-32 lg:w-[calc(8rem+2vw)] h-9 lg:h-[calc(2.25rem+.5vw)] rounded-md bg-blue-main justify-center items-center hover:opacity-60 hover:scale-105 duration-200 shadow-gray-500 shadow-md">
        <h1 className="text-white-main font-poppins text-[.8rem] lg:text-[calc(.8rem+.2vw)] font-semibold tracking-wider">
          Hubungi Kami
        </h1>
      </div>
    </Link>
  </div>
*/
}

{
  /* {
    "id": 2,
    "status": "type1",
    "productName": "Batik Cap",
    "productDesc": "Batik Cap adalah batik yang dibuat dengan mengecapkan sebuah cetakan berisi lilin ke atas kain. Batik Cap ini cocok dijadikan kaos, kemeja, taplak, selendang, sprei, maupun bentuk-bentuk sandang lainnya. Keunggulan Batik Cap adalah pilihan motifnya beragam walaupun tidak sebanyak batik tulis, tetapi pengerjaannya relatif lebih cepat.",
    "productHeroPhoto": [{
      "hero": "/images/galeri-detail/batikCap/sample.png"
    }],
    "productGallery": [{
      "img1": "/images/galeri-detail/batikCap/sample.png",
      "img2": "/images/galeri-detail/batikCap/sample.png",
      "img3": "/images/galeri-detail/batikCap/sample.png",
      "img4": "/images/galeri-detail/batikCap/sample.png",
      "img5": "/images/galeri-detail/batikCap/sample.png",
      "img6": "/images/galeri-detail/batikCap/sample.png"
    }]
  },
  {
    "id": 3,
    "status": "type1",
    "productName": "Batik Kombinasi",
    "productDesc": "Batik Kombinasi adalah perpaduan antara Batik Tulis dan Batik Cap. Batik Kombinasi ini cocok dijadikan berbagai bentuk sandang seperti kaos, kemeja, selendang, dan lain-lain. Batik Kombinasi ini memiliki banyak sekali motif karena merupakan perpaduan antara dua produk batik lainnya.",
    "productHeroPhoto": [{
      "hero": "/images/galeri-detail/batikKombinasi/sample.png"
    }],
    "productGallery": [{
      "img1": "/images/galeri-detail/batikKombinasi/sample.png",
      "img2": "/images/galeri-detail/batikKombinasi/sample.png",
      "img3": "/images/galeri-detail/batikKombinasi/sample.png",
      "img4": "/images/galeri-detail/batikKombinasi/sample.png",
      "img5": "/images/galeri-detail/batikKombinasi/sample.png",
      "img6": "/images/galeri-detail/batikKombinasi/sample.png"
    }]
  },
  {
    "id": 4,
    "status": "type1",
    "productName": "Batik Printing",
    "productDesc": "Batik Printing adalah batik yang dibuat dengan cara menge-print desain atau motif yang sudah dibuat di atas kain. Batik Printing ini biasa digunakan untuk membuat seragam atau pesanan dalam partai besar. Pembuatan Batik Printing relatif lebih cepat daripada Batik Tulis, Batik Cap, maupun Batik Kombinasi.",
    "productHeroPhoto": [{
      "hero": "/images/galeri-detail/batikPrinting/sample.png"
    }],
    "productGallery": [{
      "img1": "/images/galeri-detail/batikPrinting/sample.png",
      "img2": "/images/galeri-detail/batikPrinting/sample.png",
      "img3": "/images/galeri-detail/batikPrinting/sample.png",
      "img4": "/images/galeri-detail/batikPrinting/sample.png",
      "img5": "/images/galeri-detail/batikPrinting/sample.png",
      "img6": "/images/galeri-detail/batikPrinting/sample.png"
    }]
  },
  {
    "id": 5,
    "status": "type2",
    "productName": "Kursus Membatik",
    "productDesc": "Sejak ditetapkan oleh UNESCO bahwa batik menjadi warisan budaya dunia yang berasal dari Indonesia pada Tanggal 2 Oktober 2009, semangat masyarakat untuk mempelajari teknik pembuatan batik pun meningkat. Mulai anak-anak tingkat KB/TK, SD, SMP, SMA, hingga dewasa, dan juga dari kalangan ekspatriat, banyak yang mengunjungi showroom batik Shaho untuk kursus membatik. \n\nMateri yang dipelajari disesuaikan dengan usia dari peserta kursus. Untuk usia TK hingga SD diberi wawasan tentang batik, dan diberi kesempatan untuk praktek mewarnai batik. Sedangkan untuk usia SMP hingga dewasa diperkenankan untuk belajar batik mulai dari teknik mendesain motif batik hingga pewarnaan, tergantung paket yang diinginkan.",
    "productHeroPhoto": [{
      "hero": "/images/galeri-detail/kursusMembatik/sample.png"
    }],
    "productGallery": [{
      "img1": "/images/galeri-detail/kursusMembatik/sample.png",
      "img2": "/images/galeri-detail/kursusMembatik/sample.png",
      "img3": "/images/galeri-detail/kursusMembatik/sample.png",
      "img4": "/images/galeri-detail/kursusMembatik/sample.png",
      "img5": "/images/galeri-detail/kursusMembatik/sample.png",
      "img6": "/images/galeri-detail/kursusMembatik/sample.png"
    }]
  }*/
}

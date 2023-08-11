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

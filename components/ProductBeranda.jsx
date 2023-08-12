import ListProducts from "@/components/ListProducts";

export default function ProdukBeranda() {
  return (
    <>
      <div className="relative w-full h-auto flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col items-center">
          {/* Header */}
          <div className="w-[93%] h-auto py-5 flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-3">
            <h1 className="text-[#73777B] md:text-lg lg:text-[calc(1.25rem+.2vw)] font-poppins text-center">
              PRODUK DAN LAYANAN
            </h1>
            <h1 className="text-blue-main font-poppins-bold drop-shadow-md text-center lg:text-start md:text-xl lg:text-[calc(1.25rem+1vw)]">
              Seluruh kebutuhan batik Anda tersedia di sini.
            </h1>
          </div>
          {/* Content */}
          <ListProducts />
        </div>
      </div>
    </>
  );
}

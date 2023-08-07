import Navbar from "@/components/Navbar";
import ListProducts from "@/components/ListProducts";

export default function produk() {
  return (
    <>
      <Navbar status="produk" />
      {/* <div className="w-full h-screen flex justify-center items-center text-xl">Produk & Layanan</div> */}
      <div className="relative w-full h-auto pt-28 pb-5 flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col items-center">
          <ListProducts />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#F3FBF6] w-full h-16 flex justify-between px-10 box-border items-center">
        <Link href={`/`}>
          <Image src={`logo/logoShaho.svg`} width={100} height={20} alt="Logo Shaho" className="bg-transparent"/>
        </Link>
        <button>
          <Image src={`icons/burgerMenu.svg`} width={25} height={30} alt="Menu Button" />
        </button>
      </div>
    </>
  );
}

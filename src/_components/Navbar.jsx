import images from "@/_constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 sticky top-0 z-10">
      <Link href="/" className="flex gap-3 items-center justify-between">
        <Image src={images.logo} alt="ecommerce-logo" width={50} height={50} />
        <h1>E-commerce</h1>
      </Link>
      <button
        className=" text-5xl text-[#808080] cursor-pointer relative scale-100 hover:scale-105 transition transform duration-300 ease-in-out border-none bg-transparent"
        type="button"
        onClick=''
      >
        <AiOutlineShopping />
        <span className="absolute -right-1 top-1 text-xs text-white bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
          1
        </span>
      </button>
    </nav>
  );
};

export default Navbar;

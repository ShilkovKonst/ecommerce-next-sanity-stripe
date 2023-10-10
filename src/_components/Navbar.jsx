"use client";
import images from "@/_constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";
import { usePathname } from "next/navigation";
import { AiFillHome, AiOutlineDashboard } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        !pathname.includes("studio")
          ? "sticky bg-beige text-darkwood flex p-3 top-0 z-10 justify-between"
          : "absolute top-0 right-[90px] sm:right-[100px] md:right-[155px] z-[110]"
      }`}
    >
      {!pathname.includes("studio") ? (
        <>
          <Link
            href="/"
            className={`flex gap-3 items-center justify-between ${
              pathname.includes("studio") &&
              " bg-white mt-[1px] h-[49px] rounded-full"
            }`}
          >
            <Image
              src={images.logo}
              alt="ecommerce-logo"
              width={50}
              height={50}
            />
            <h1 className="font-semibold text-2xl">E-commerce</h1>
          </Link>
          <Link
            href="/studio"
            className={`flex gap-3 items-center justify-between`}
          >
            <AiOutlineDashboard size={50} />
          </Link>
          <Cart />
        </>
      ) : (
        <>
          <Link
            href="/"
            className={`flex gap-3 items-center justify-between text-white mt-[1px] h-[50px]`}
          >
            <AiFillHome size={30} />
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

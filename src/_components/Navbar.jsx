"use client";
import images from "@/_constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 sticky top-0 z-10">
      <Link href="/" className="flex gap-3 items-center justify-between">
        <Image src={images.logo} alt="ecommerce-logo" width={50} height={50} />
        <h1>E-commerce</h1>
      </Link>
      <Cart />
    </nav>
  );
};

export default Navbar;

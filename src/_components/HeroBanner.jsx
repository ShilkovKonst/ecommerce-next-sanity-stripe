"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { urlForImage } from "../../sanity/lib/image";

const HeroBanner = ({ banner }) => {
  return (
    <Link href={`product/${banner.slug}`}>
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-10 md:gap-16 px-6 sm:px-12 md:px-24 py-10 bg-[#dcdcdc] rounded-2xl h-auto sm:h-[500px] w-full">
        <div className="relative h-96 min-w-0 sm:min-w-[300px] md:min-w-[330px]">
          <p className="text-xl">{banner.description.preheader}</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1">
            {banner.description.header}
          </h2>
          {/*  */}
          <h3 className="absolute top-16 -left-1 md:-left-2 text-[#ffffff7e] text-[5em] md:text-[10em] text-left uppercase leading-[1.3] md:leading-none z-10">
            {banner.description.buttonText}
          </h3>
          <Image
            className="absolute top-[5rem] left-0 w-80 sm:w-72 md:w-80 h-80 sm:h-72 md:h-80"
            src={banner.image}
            alt={banner.description.header}
            height={300}
            width={300}
          />
        </div>
        <div className=" rounded-tr-3xl rounded-bl-3xl px-3 py-4 w-full bg-[#f02d3350] text-white border-none text-lg font-medium cursor-pointer">
          <div className="w-full h-full leading-[1.3] flex flex-col text-[#324d67] ">
            <h5 className="font-bold text-base">Description</h5>
            <p className="my-5 text-[#5f5f5f] font-light">
              {banner.description.description}
            </p>
            <p className="mt-auto text-[#5f5f5f] font-semibold text-end">
              From {banner.saleTime.start} till {banner.saleTime.end}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroBanner;

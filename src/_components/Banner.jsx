import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = ({
  banner: { description, saleTime, slug, image },
}) => {
  return (
    <Link href={`product/${slug}`}>
      <div className="px-6 sm:px-12 md:px-24 py-10 bg-[#f02d34] rounded-2xl relative h-auto leading-none text-white w-full">
        <div className="flex flex-col-reverse sm:flex-row gap-5 lg:gap-0 justify-between items-center">
          <div className="">
            {/* <p className="m-5 uppercase">{footerBanner.description.discount} off</p> */}
            <p className="font-black text-[50px] xl:text-[80px]">
              {description.buttonText}
            </p>
            <p className="font-black text-[50px] xl:text-[80px] uppercase">
              {description.discount} off
            </p>
            <p className="mt-5 ">
              From {saleTime.start}
            </p>
            <p className="mb-5 ">
              till {saleTime.end}
            </p>
          </div>
          <Image
            className=" w-48 h-48 sm:w-40 sm:h-40 xl:w-80 xl:h-80"
            src={image}
            alt={description.header}
            width={300}
            height={300}
          />
          <div className="">
            <p className="text-lg">{description.preheader}</p>
            <p className="font-extrabold text-5xl lg:text-6xl">
              {description.header}
            </p>
            <p className="text-lg">{description.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Banner;

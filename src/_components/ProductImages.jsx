"use client";
import Image from "next/image";
import React, { useState } from "react";
import { urlForImage } from "../../sanity/lib/image";

const ProductImages = ({ images }) => {
  const [index, SetIndex] = useState(0);

  return (
    <div>
      <div className="w-[300px] md:w-[400px] rounded-2xl bg-[#ebebeb] transform scale-100 transition duration-500 ease-in-out">
        <Image
          className="rounded-2xl bg-beige hover:bg-lightwood w-[300px] md:w-[400px] h-[300px] md:h-[400px] cursor-pointer transition duration-300 ease-in-out"
          src={urlForImage(images[index]).url()}
          alt={`image ${index}`}
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-5">
        {images.map((image, i) => (
          <Image
            className={
              i == index
                ? `rounded-lg w-[70px] h-[70px] cursor-pointer bg-lightwood`
                : `rounded-lg bg-beige w-[70px] h-[70px] cursor-pointer`
            }
            key={i}
            src={urlForImage(image).url()}
            alt={`image ${i}`}
            width={100}
            height={100}
            onMouseEnter={() => SetIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";

const Product = ({ product }) => {
  return (
    <Link href={`/product/${product.slug.current}`}>
      <div className="cursor-pointer transform scale-100 hover:scale-110 transition-transform duration-500 ease-in-out text-darkwood">
        <Image
          className="rounded-2xl bg-lightwood transform scale-100 transition duration-500 ease-in-out"
          src={urlForImage(product?.images[0]).url()}
          alt={product.name}
          height={200}
          width={200}
        />
        <p className="font-medium">{product.name}</p>
        <p className="font-extrabold mt-2 text-black">€{product.price}</p>
      </div>
    </Link>
  );
};

export default Product;

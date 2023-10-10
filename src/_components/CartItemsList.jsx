"use client";
import Image from "next/image";
import React from "react";
import { QntyChanger } from ".";
import { AiOutlineDelete } from "react-icons/ai";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

const CartItemsList = ({ item, setShowCart }) => {
  return (
    <div className="flex justify-between py-3 md:py-6">
      <Link
        className="w-1/4 md:w-[100px] h-1/4 md:h-[100px] rounded-2xl bg-lightwood"
        href={`/product/${item.slug.current}`}
        onClick={() => setShowCart(false)}
      >
        <Image
          src={urlForImage(item.images[0]).url()}
          alt={item.name}
          width={100}
          height={100}
        />
      </Link>
      <div className="w-60 md:w-96 flex flex-col justify-between font-semibold">
        <div className="w-full flex justify-between items-center">
          <p className="text-xl md:text-2xl text-darkwood w-40 md:w-60">
            {item.name}
          </p>
          <p className="text-xl text-center">€{item.price}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <QntyChanger product={item} cart={true} />
          <button
            className="text-3xl text-[#f02d34] cursor-pointer bg-transparent border-none"
            type="button"
            onClick={() => removeFromCart(item)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemsList;

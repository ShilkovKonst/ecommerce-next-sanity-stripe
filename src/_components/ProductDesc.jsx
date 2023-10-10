/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useStateContext } from "@/_context/StateContext";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { QntyChanger } from ".";

const ProductDesc = ({ product }) => {
  const { setProduct, qnty, addToCart, setShowCart } = useStateContext();

  useEffect(() => {
    setProduct(product);
  }, []);

  const handleBuyNow = () => {
    addToCart(qnty);
    setShowCart(true)
  }

  return (
    <div className="w-full ">
      <h1 className="text-3xl font-extrabold">{product.name}</h1>
      <div className="text-lightwood mt-3 flex gap-1 items-center">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <p className="mt-0 text-darkwood">(20)</p>
      </div>

      <h2 className="mt-3 text-xl font-bold">Details:</h2>
      <p className="mt-3 text-black">{product.details.description}</p>

      <div className=" my-8 flex items-center gap-3">
        <h3 className="text-xl font-bold">Price:</h3>
        <p className="text-black text-xl font-bold">€{product.price}</p>
      </div>
      <QntyChanger product={product} cart={false} />

      <div className="flex flex-wrap mt-10 gap-8">
        <button
          className="w-full sm:w-[150px] md:w-[200px] px-3 py-5 border border-solid rounded-3xl border-lightwood bg-lightwood text-darkwood text-lg font-medium cursor-pointer transform scale-100 hover:scale-105 transition duration-500 ease-in-out"
          type="button"
          onClick={() => addToCart(qnty)}
        >
          Add to cart
        </button>
        <button
          className="w-full sm:w-[150px] md:w-[200px] px-3 py-5 border border-solid rounded-3xl border-darkwood bg-darkwood text-lightwood text-lg font-medium cursor-pointer transform scale-100 hover:scale-105 transition duration-500 ease-in-out"
          type="button"
          onClick={handleBuyNow}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductDesc;

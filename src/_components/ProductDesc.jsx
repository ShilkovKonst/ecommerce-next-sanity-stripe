"use client";
import { useStateContext } from "@/_context/StateContext";
import React, { useEffect } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { QntyChanger } from ".";

const ProductDesc = ({ product }) => {
  const { setProduct, qnty, addToCart } = useStateContext();

  useEffect(() => {
    setProduct(product);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-extrabold">{product.name}</h1>
      <div className="text-[#f02d34] mt-3 flex gap-1 items-center">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <p className="mt-0 text-[#324d67]">(20)</p>
      </div>

      <h2 className="mt-3 text-xl font-bold">Details:</h2>
      <p className="mt-3">{product.details.description}</p>

      <div className=" my-8 flex items-center gap-3">
        <h3 className="text-xl font-bold">Price:</h3>
        <p className="text-[#f02d34] text-xl font-bold">€{product.price}</p>
      </div>
      <QntyChanger product={product} cart={false} />

      <div className="flex flex-wrap gap-8">
        <button
          className="w-[150px] md:w-[200px] px-3 py-5 border border-solid border-[#f02d34] mt-10 text-lg font-medium bg-white text-[#f02d34] cursor-pointer transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
          type="button"
          onClick={() => addToCart(qnty)}
        >
          Add to cart
        </button>
        <button
          className="w-[150px] md:w-[200px] px-3 py-5 bg-[#f02d34] text-white border-none mt-10 text-lg font-medium cursor-pointer transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
          type="button"
          // onClick=""
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductDesc;

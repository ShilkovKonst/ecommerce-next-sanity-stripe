"use client";
import { useStateContext } from "@/_context/StateContext";
import React, { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QntyChanger = ({ product, cart }) => {
  const { qnty, setQnty, decreaseQnty, increaseQnty, changeQntyCart } =
    useStateContext();

useEffect(() => {
    setQnty(1)
}, [])

  return (
    <div className="flex items-center gap-3">
      {!cart && <h4 className="text-xl font-bold">Quantity:</h4>}
      <p className="flex justify-between items-center border border-solid border-[gray] h-auto w-auto">
        <span
          className="flex justify-center items-center border-r border-solid border-l-[gray] text-xl px-2 py-3 cursor-pointer text-[#f02d34]"
          onClick={!cart ? decreaseQnty : () => changeQntyCart(product, 'dec')}
        >
          <AiOutlineMinus />
        </span>
        <span className="text-xl cursor-default px-3">
          {product.quantity ? product.quantity : qnty}
        </span>
        <span
          className="flex justify-center items-center border-l border-solid border-r-[gray] text-xl px-2 py-3 cursor-pointer text-[#31a831]"
          onClick={!cart ? increaseQnty : () => changeQntyCart(product, 'inc')}
        >
          <AiOutlinePlus />
        </span>
      </p>
    </div>
  );
};

export default QntyChanger;

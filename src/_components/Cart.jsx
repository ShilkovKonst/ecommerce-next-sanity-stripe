"use client";
import { useStateContext } from "@/_context/StateContext";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineShopping,
} from "react-icons/ai";
import { urlForImage } from "../../sanity/lib/image";
import QntyChanger from "./QntyChanger";

const Cart = () => {
  const cartRef = useRef();
  const { showCart, setShowCart, totalQnty, totalPrice, cartItems, removeFromCart } =
    useStateContext();

  return (
    <>
      {showCart ? (
        <div className="w-screen bg-[#00000080] fixed right-0 top-0 z-[100] transition-all duration-1000 ease-in-out">
          <div className="h-screen w-[415px] md:w-[600px] bg-white float-right p-1 md:px-10 md:py-3 relative">
            <button
              className="flex justify-between items-center w-full text-lg font-medium cursor-pointer gap-1 mt-9 md:mt-0 border-none bg-transparent"
              type="button"
              onClick={() => setShowCart(false)}
            >
              <p>
                <span className="">Your Cart</span>
                <span className="text-[#f02d34] ml-3">({totalQnty}) items</span>
              </p>
              <AiOutlineClose />
            </button>
            {cartItems.length == 0 ? (
              <div className="m-10 text-center">
                <AiOutlineShopping size={150} className="ml-auto mr-auto" />
                <p className="text-xl font-semibold">
                  Your shopping cart is empty
                </p>
                <Link href="/">
                  <button
                    className="w-full max-w-[400px] p-3 rounded-2xl border-none text-xl mt-10 uppercase bg-[#f02d34] text-white cursor-pointer transform scale-100 transition duration-500 ease-in-out"
                    type="button"
                    onClick={() => setShowCart(false)}
                  >
                    Continue shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div className="mt-2 md:mt-4 overflow-auto max-h-[70vh] px-5 py-3">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between py-1 md:py-5"
                  >
                    <Image
                      className="w-1/4 md:w-[150px] h-1/4 md:h-[150px] rounded-2xl bg-[#ebebeb]"
                      src={urlForImage(item.images[0]).url()}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                    <div className="w-60 flex flex-col justify-between font-semibold">
                      <div className="w-full flex justify-between">
                        <p className="text-2xl text-[#324d67]">{item.name}</p>
                        <p className="text-xl">€{item.price}</p>
                      </div>
                      <div className="w-full flex justify-between">
                        <QntyChanger product={item} cart={true} />
                        <button
                          className="text-2xl text-[#f02d34] cursor-pointer bg-transparent border-none"
                          type="button"
                          onClick={() => removeFromCart(item)}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-3 right-1 w-full p-8 md:px-8 md:py-16">
                  <div className="flex justify-between">
                    <p className="text-xl md:text-2xl">Total:</p>
                    <p className="text-xl md:text-2xl">€{totalPrice}</p>
                  </div>
                  <div className="w-[300px] md:w-[400px] m-auto">
                    <button
                      className="w-full max-w-[400px] p-3 rounded-2xl border-none text-xl mt-10 uppercase bg-[#f02d34] text-white cursor-pointer transform scale-100 hover:scale-105 transition duration-500 ease-in-out"
                      type="button"
                    >
                      Pay with Stripe
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          className=" text-5xl text-[#808080] cursor-pointer relative scale-100 hover:scale-105 transition transform duration-300 ease-in-out border-none bg-transparent"
          type="button"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          {totalQnty > 0 && (
            <span className="absolute -right-1 top-1 text-xs text-white bg-[#f02d34] w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
              {totalQnty}
            </span>
          )}
        </button>
      )}
    </>
  );
};

export default Cart;

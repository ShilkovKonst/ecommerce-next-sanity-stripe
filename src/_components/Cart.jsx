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
import { stripePromise } from "../../stripe/lib/client";
import toast from "react-hot-toast";
import CartItemsList from "./CartItemsList";

const Cart = () => {
  const cartRef = useRef();
  const {
    showCart,
    setShowCart,
    totalQnty,
    totalPrice,
    cartItems,
    removeFromCart,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const body = cartItems.map((item) => {
      const img = item.images[0].asset._ref;
      const newImage = img
        .replace("image-", "https://cdn.sanity.io/images/jrhc13ib/production/")
        .replace("-webp", ".webp");
      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            images: [newImage],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity,
      };
    });
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      console.error("Error response from server:", response.statusText);
    } else {
      try {
        const session = await response.json();
        toast.loading("Redirecting...");
        stripe.redirectToCheckout({ sessionId: session.id });
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    }
  };

  return (
    <>
      {showCart ? (
        <div className="w-screen bg-[#00000080] fixed right-0 top-0 z-[100] transition-all duration-1000 ease-in-out">
          <div className="h-screen w-[375px] md:w-[600px] float-right p-4 md:px-8 md:py-3 relative bg-beige">
            <button
              className="flex justify-between items-center w-full text-lg font-medium cursor-pointer gap-1 mt-9 md:mt-0 border-none bg-transparent"
              type="button"
              onClick={() => setShowCart(false)}
            >
              <p>
                <span className="">Your Cart</span>
                <span className="text-darkwood ml-3">({totalQnty}) items</span>
              </p>
              <AiOutlineClose size={48}/>
            </button>
            {cartItems.length == 0 ? (
              <div className="m-10 text-center">
                <AiOutlineShopping size={150} className="ml-auto mr-auto" />
                <p className="text-xl font-semibold">
                  Your shopping cart is empty
                </p>
                <Link href="/">
                  <button
                    className="w-full max-w-[400px] p-3 rounded-2xl border-none text-xl mt-10 uppercase bg-darkwood text-lightwood cursor-pointer transform scale-100 hover:scale-105 transition duration-500 ease-in-out"
                    type="button"
                    onClick={() => setShowCart(false)}
                  >
                    Continue shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div className="mt-3 md:mt-6 overflow-auto max-h-[70vh]">
                {cartItems.map((item) => (
                  <CartItemsList key={item._id} item={item} setShowCart={setShowCart} />
                ))}
                <div className="absolute bottom-3 right-0 w-full p-4 md:px-8 md:py-16">
                  <div className="flex justify-between">
                    <p className="text-2xl font-semibold md:text-3xl">Total:</p>
                    <p className="text-2xl font-semibold md:text-3xl">€{totalPrice}</p>
                  </div>
                  <div className="w-[300px] md:w-[400px] m-auto">
                    <button
                      className="w-full max-w-[400px] p-3 rounded-2xl border-none text-xl mt-10 uppercase bg-darkwood text-lightwood cursor-pointer transform scale-100 hover:scale-105 transition duration-500 ease-in-out"
                      type="button"
                      onClick={handleCheckout}
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
          className=" text-5xl text-darkwood cursor-pointer relative scale-100 hover:scale-105 transition transform duration-300 ease-in-out border-none bg-transparent"
          type="button"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          {totalQnty > 0 && (
            <span className="absolute -right-1 top-1 text-xs text-white bg-robin w-[18px] h-[18px] rounded-[50%] text-center font-semibold">
              {totalQnty}
            </span>
          )}
        </button>
      )}
    </>
  );
};

export default Cart;

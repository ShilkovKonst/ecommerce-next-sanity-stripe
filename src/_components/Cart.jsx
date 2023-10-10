"use client";
import { useStateContext } from "@/_context/StateContext";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { stripePromise } from "../../stripe/lib/client";
import toast from "react-hot-toast";
import { CartBody } from ".";

const Cart = () => {
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
        <CartBody cartItems={cartItems} setShowCart={setShowCart} removeFromCart={removeFromCart} totalQnty={totalQnty} totalPrice={totalPrice} handleCheckout={handleCheckout} />
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

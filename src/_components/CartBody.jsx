/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { CartItem } from ".";

const CartBody = ({
  cartItems,
  setShowCart,
  removeFromCart,
  totalQnty,
  totalPrice,
  handleCheckout,
}) => {
  const modalRef = useRef();
  const handleCloseModal = (e) => {
    if (modalRef && !modalRef.current.contains(e.target)) {
      setShowCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  return (
    <div className="w-screen bg-[#00000080] fixed right-0 top-0 z-[100] transition-all duration-1000 ease-in-out">
      <div
        ref={modalRef}
        className="h-screen w-[375px] md:w-[600px] float-right p-4 md:px-8 md:py-3 relative bg-beige"
      >
        <button
          className="flex justify-between items-center w-full text-lg font-medium cursor-pointer gap-1 mt-9 md:mt-0 border-none bg-transparent"
          type="button"
          onClick={() => setShowCart(false)}
        >
          <p>
            <span className="">Your Cart</span>
            <span className="text-darkwood ml-3">({totalQnty}) items</span>
          </p>
          <AiOutlineClose size={48} />
        </button>
        {cartItems.length == 0 ? (
          <div className="m-10 text-center">
            <AiOutlineShopping size={150} className="ml-auto mr-auto" />
            <p className="text-xl font-semibold">Your shopping cart is empty</p>
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
              <CartItem
                key={item._id}
                item={item}
                setShowCart={setShowCart}
                removeFromCart={removeFromCart}
              />
            ))}
            <div className="absolute bottom-3 right-0 w-full p-4 md:px-8 md:py-16">
              <div className="flex justify-between">
                <p className="text-2xl font-semibold md:text-3xl">Total:</p>
                <p className="text-2xl font-semibold md:text-3xl">
                  €{totalPrice}
                </p>
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
  );
};

export default CartBody;

"use client";
import { useStateContext } from "@/_context/StateContext";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";

const SuccessPage = () => {
  const { setCartItems, setTotalPrice, setTotalQnty } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQnty(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white min-h-[69vh] md:min-h-[60vh]">
      <div className="bg-lightwood w-[370px] md:w-[1000px] m-auto mt-[100px] md:mt-[160px] p-5 md:p-[50px] rounded-2xl flex justify-center items-center flex-col">
        <p className="text-darkgreen text-4xl">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="font-semibold text-base text-center">Check your email inbox for the receipt.</p>
        <p className="text-base font-semibold text-center m-3 mt-8">
          If you have any questions, please email
          <Link className="ml-1 text-robin" href="mailto:order@example.com">
            order@example.com
          </Link>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="w-full max-w-[400px] p-3 rounded-2xl border-none text-xl mt-10 uppercase bg-robin text-white cursor-pointer transform scale-100 hover:scale-105 transition duration-500 ease-in-out">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;

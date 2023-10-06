import React from "react";
import { getOneProduct, getProducts } from "../../../../sanity/utils";
import {
  AiFillStar,
  AiOutlineAim,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { Product } from "@/_components";
import ProductImages from "@/_components/ProductImages";

const ProductDetails = async ({ params }) => {
  const product = await getOneProduct(params.slug);
  const { images, name, price, details } = product;

  const products = await getProducts();
  console.log(images);
  return (
    <main className="text-[#324d67] m-auto w-full max-w-[1280px]">
      <div className="flex flex-wrap md:flex-nowrap gap-10 mx-10 xl:mx-0">
        <ProductImages images={images} />

        <div>
          <h1 className="text-3xl font-extrabold">{name}</h1>
          <div className="text-[#f02d34] mt-3 flex gap-1 items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="mt-0 text-[#324d67]">(20)</p>
          </div>

          <h2 className="mt-3 text-xl font-bold">Details:</h2>
          <p className="mt-3">{details.description}</p>

          <div className=" mt-8 flex items-center gap-3">
            <h3 className="text-xl font-bold">Price:</h3>
            <p className="text-[#f02d34] text-xl font-bold">€{price}</p>
          </div>

          <div className=" mt-8 flex items-center gap-3">
            <h4 className="mt-3 text-xl font-bold">Quantity:</h4>
            <p className="flex justify-between mt-3 items-center border border-solid border-[gray] h-auto w-auto">
              <span
                className="flex justify-center items-center border-r border-solid border-l-[gray] text-xl px-2 py-3 cursor-pointer text-[#f02d34]"
                onClick=""
              >
                <AiOutlineMinus />
              </span>
              <span className="text-xl cursor-default px-3">0</span>
              <span
                className="flex justify-center items-center border-l border-solid border-r-[gray] text-xl px-2 py-3 cursor-pointer text-[#31a831]"
                onClick=""
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <button
              className="w-[150px] md:w-[200px] px-3 py-5 border border-solid border-[#f02d34] mt-10 text-lg font-medium bg-white text-[#f02d34] cursor-pointer transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
              type="button"
              onClick=""
            >
              Add to cart
            </button>
            <button
              className="w-[150px] md:w-[200px] px-3 py-5 bg-[#f02d34] text-white border-none mt-10 text-lg font-medium cursor-pointer transform scale-100 hover:scale-110 transition duration-500 ease-in-out"
              type="button"
              onClick=""
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 mx-10 xl:mx-0">
        <h5 className="font-bold text-center m-[50px] text-3xl">You may also like</h5>
        <div className="relative h-[400px] w-full overflow-x-hidden">
          <div className="flex gap-4 justify-center mt-5 absolute whitespace-nowrap will-change-transform w-[550%] md:w-[180%] animate-marquee track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

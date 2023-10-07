import React from "react";
import { getOneProduct, getProducts } from "../../../../sanity/utils";
import { Product, ProductImages } from "@/_components";
import ProductDesc from "@/_components/ProductDesc";

const ProductDetails = async ({ params }) => {
  const product = await getOneProduct(params.slug);
  const { images, name, price, details } = product;

  const products = await getProducts();
  
  return (
    <main className="text-[#324d67] m-auto w-full max-w-[1280px]">
      <div className="flex flex-wrap md:flex-nowrap gap-10 mx-10 xl:mx-0">
        <ProductImages images={images} />
        <ProductDesc product={product} />
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

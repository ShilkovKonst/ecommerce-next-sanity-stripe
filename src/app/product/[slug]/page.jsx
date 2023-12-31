import React from "react";
import { getOneProduct, getProducts } from "../../../../sanity/utils";
import { Product, ProductImages, ProductDesc } from "@/_components";

const ProductPage = async ({ params }) => {
  const product = await getOneProduct(params.slug);
  const { images } = product;

  const products = await getProducts();

  return (
    <main className="text-darkwood m-auto w-full max-w-[1280px] mt-5">
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

export default ProductPage;

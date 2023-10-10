import { Product, Banner } from "@/_components";
import { getHeadBanner, getProducts } from "../../sanity/utils";

export default async function HomePage() {
  const products = await getProducts();
  const banner = await getHeadBanner();
  const today = new Date().toISOString().slice(0, 10);
  console.log(banner)
  return (
    <main className="m-auto w-full max-w-[1280px] mt-5">
      {banner?.saleTime.start <= today && banner?.saleTime.end >= today && (
        <Banner banner={banner} />
      )}
      <div className="mx-10 xl:mx-0 my-0 text-center text-darkwood">
        <h3 className=" mt-10 text-3xl font-extrabold">
          Best selling products
        </h3>
        <p className="text-base font-extralight">Speakers of many variations</p>
        <div className="flex flex-wrap justify-center gap-10 xl:gap-17 mt-5 w-full">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

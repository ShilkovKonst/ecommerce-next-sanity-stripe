import Image from "next/image";
import {
  Product,
  Banner,
  Layout,
  Cart,
} from "@/_components";
import { urlForImage } from "../../sanity/lib/image";
import { getHeadBanner, getProducts } from "../../sanity/utils";

export default async function Home() {
  const products = await getProducts();
  const banner = await getHeadBanner();
  const today = new Date().toISOString().slice(0, 10);
  console.log("banner from page", banner);
  console.log("products from page", products);
  return (
    <main className="m-auto w-full max-w-[1400px]">
      {banner?.saleTime.start <= today && banner?.saleTime.end >= today && (
        <Banner banner={banner} />
      )}
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-5 w-full">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}

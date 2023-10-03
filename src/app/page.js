import Image from "next/image";
import {
  Navbar,
  Product,
  Footer,
  FooterBanner,
  HeroBanner,
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
    <main className="">
      {banner?.saleTime.start <= today && banner?.saleTime.end >= today && (
        <HeroBanner banner={banner} />
      )}
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <div key={product._id}>
            <div>{product.name}</div>
            {/* <div>{product.details}</div> */}
            <Image
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>
      <FooterBanner />
    </main>
  );
}
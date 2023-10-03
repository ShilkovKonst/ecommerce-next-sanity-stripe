const { groq } = require("next-sanity");
const { client } = require("../lib/client");

const revalidate = 0

async function getProducts() {
  const query = groq`*[_type == 'products'] {
    _id, name, images, slug, price, details
  }`;
  const res = await client.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });
  return res;
}

async function getHeadBanner() {
  const query = groq`*[_type == 'banners' && references(*[_type == 'tags' && name == 'sale']._id)][0] {
        _id, description, saleTime, 'image': product->images[0].asset->url, 'slug': product->slug.current
    }`;
  const res = await client.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });
  return res;
}

export { getProducts, getHeadBanner };

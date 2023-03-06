// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Product } from "pages/types/product";
const query = groq`*[_type == 'product']{
    _id,
    ...  
}| order(_createAt asc)`;
type Data = {
  products: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products: Product[] = await sanityClient.fetch(query);
  console.log("categories", products);
  res.status(200).json({ products });
}

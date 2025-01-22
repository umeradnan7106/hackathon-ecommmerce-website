import { groq } from "next-sanity";


export const allproducts = groq`*[_type == "product"]`;
export const four = groq`*[type == "product"][0..3]`;
import { defineQuery } from "next-sanity";

export const QUERY = defineQuery(`*[_type == "blog" && defined(slug.current)]
    | order(_createdAt desc) {
  title,
  _id,
  author -> {
    _id,
    name,
    image,
    bio   
  },
  views,
  description,
  category,
  image,
  slug,
  _createdAt
}
`);

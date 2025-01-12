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

export const POST_ID_QUERY = defineQuery(`*[_type == "blog" && _id == $id][0]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, username, image, bio
  }, 
  views,
  description,
  category,
  image,
  playground,
}`);

export const VIEWS_QUERY = defineQuery(`
    *[_type == "blog" && _id == $id][0]{
        _id, views
    }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
*[_type == "author" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
*[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

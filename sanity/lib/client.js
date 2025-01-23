import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
const builder = imageUrlBuilder(client);

// Function to build image URLs
export const urlFor = (source) => builder.image(source);

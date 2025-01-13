"use server";

import { auth } from "@/auth";
import { writeClient } from "@/sanity/lib/write-client";
import slugify from "slugify";

export const createPost = async (formData) => {
  const session = await auth(); // Ensure `auth` is invoked
  if (!session) {
    return JSON.stringify({ message: "Unauthorized" }); // Return meaningful error if no session
  }

  const { title, description, category, value } = formData;

  if (!title || !description || !category || !value) {
    return JSON.stringify({ message: "Invalid form data" }); // Validate formData
  }

  const slug = slugify(title, { lower: true });

  try {
    const post = {
      _type: "blog", // Ensure `_type` is set for Sanity documents
      title,
      description,
      category,
      views: 0,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      playground: value,
    };

    const result = await writeClient.create(post);

    if (result) {
      return JSON.stringify({ message: "Success", postId: result._id });
    }
  } catch (error) {
    console.error("Error creating post:", error);
    return JSON.stringify({ message: "Error in creating post" });
  }
};

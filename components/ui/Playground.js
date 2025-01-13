"use client";
import MDEditor from "@uiw/react-md-editor";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/lib/actions";

export const Playground = () => {
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("formData="));

      if (cookie) {
        const parsedFormData = JSON.parse(cookie.split("=")[1]);
        setFormData(parsedFormData);
      } else {
        router.push("/create");
      }
    } catch (error) {
      console.error("Error parsing formData cookie:", error);
      router.push("/create");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData) {
      alert("Form data is missing.");
      return;
    }

    if (!value.trim()) {
      alert("Please enter some content for the blog.");
      return;
    }

    const fullData = {
      ...formData,
      value, // Include playground markdown content
    };

    console.log("Submitting blog:", fullData);
    // Add further handling logic here, e.g., API call to save the blog
    const result = await createPost(fullData);
    console.log(result);
  };
  return (
    <div className="max-w-4xl mx-auto mt-4 p-5 rounded-lg shadow-2xl">
      <MDEditor
        value={value}
        onChange={setValue}
        height={500}
        preview="edit"
        className="border border-gray-300 rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="mt-10 w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
      >
        PUBLISH THE BLOG ! 🚀
      </button>
    </div>
  );
};

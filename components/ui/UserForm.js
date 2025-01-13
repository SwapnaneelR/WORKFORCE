"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
export default function UserForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.title || !formData.category) {
      setError("Title and Category are required.");
      return;
    }

    setError(""); // Clear error if validation passes
    console.log("Form Data Submitted:", formData);

    // Set cookie to indicate form is filled
    document.cookie = "formFilled=true; path=/";
    document.cookie = `formData=${JSON.stringify(formData)}; path=/;`;
    // Navigate to the editor page
    router.push("/create/editor");
  };

  return (
    <div className="flex items-center font-semibold justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundImage: `url(./logo.jpg)`,
        }}
        className="w-full p-10 max-w-md rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-5xl font-bold text-zinc-800 text-center">
          Create Post
        </h2>

        {error && (
          <p className="mb-4 text-red-500 text-center text-sm">{error}</p>
        )}

        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-xl font-semibold">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 text-xl font-semibold"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter the description"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block mb-2 text-xl font-semibold"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select a category</option>
            <option value="Technology">tech</option>
            <option value="Health">general</option>
            <option value="Education">Education</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        <Button
          type="submit"
          className="w-full mt-3 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Continue with Post
        </Button>
      </form>
    </div>
  );
}

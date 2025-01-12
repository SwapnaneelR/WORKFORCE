"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./button";
import { Link } from "lucide-react";
export default function UserForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to handle the form submission, e.g., API call
  };

  return (
    <div className="flex items-center font-semibold justify-center min-h-screen  ">
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundImage: `url(./logo.jpg)`,
        }}
        className="w-full p-10 max-w-md   rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-5xl font-bold  text-zinc-800 text-center">
          Create Post
        </h2>

        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-xl text-semibold  ">
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
            className="block mb-2 text-xl text-semibold  "
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
            className="block mb-2 text-semibold text-xl   "
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
            <option value="Technology">Tech</option>
            <option value="Health">Interview</option>
            <option value="Education">Education</option>
            <option value="Lifestyle">General</option>
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

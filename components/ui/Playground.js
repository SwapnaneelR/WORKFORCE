"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export const Playground = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted content:", value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4  rounded-lg shadow-2xl">
      <MDEditor
        value={value}
        onChange={setValue}
        height={500}
        preview="edit"
        className="border border-gray-300 rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="mt-10 w-full py-3 px-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition duration-300"
      >
        PUBLISH THE BLOG ! 🚀
      </button>
    </div>
  );
};

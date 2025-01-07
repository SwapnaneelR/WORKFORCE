// pages/index.js
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 ">
      {/* Left Section: Text and Buttons */}
      <div className="md:w-1/2 mx-6 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-5xl font-bold mb-6">Welcome to WORKFORCE</h1>
        <p className="text-lg leading-7 mb-8">
          WORKFORCE is your go-to platform for sharing knowledge, exchanging
          ideas, and building a thriving community of tech enthusiasts and
          creators. Explore insightful blogs, write your own, and connect with
          like-minded individuals.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link href="/blogs">
            <p className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition">
              Explore Blogs
            </p>
          </Link>
          <Link href="/about">
            <p className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition">
              Learn More
            </p>
          </Link>
        </div>
      </div>

      {/* Right Section: Animation */}
      <div className="md:w-1/2 mb-10 flex justify-center items-center">
        <Image
          src="/main.jpg"
          alt=" illustration"
          width={350}
          height={450}
          className="rounded-2xl shadow-lg "
        />
      </div>
    </div>
  );
};

export default Home;

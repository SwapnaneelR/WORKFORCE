// pages/about.js
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl w-full text-center">
        <h2 className=" text-3xl md:text-6xl font-bold mb-8">WORKFORCE</h2>
        <p className="text-lg leading-7 mb-8">
          Welcome to <span className="font-semibold">WORKFORCE</span>, your
          ultimate destination for empowering ideas and collaborative insights.
          Our platform is designed to connect individuals, spark creativity, and
          drive growth through seamless blogging and storytelling.
        </p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="shadow-2xl rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="leading-6">
            At WORKFORCE, our mission is to create a dynamic and inclusive space
            where knowledge meets inspiration, fostering an environment where
            ideas can grow, evolve, and empower creators. We strive to provide
            the tools, resources, and support that help individuals thrive,
            enabling them to share their expertise, explore new horizons, and
            collaborate with like-minded people. Through this platform, we aim
            to cultivate a community where meaningful connections are built,
            innovation is encouraged, and creativity knows no bounds
          </p>
        </div>

        <div className="shadow-2xl rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose WORKFORCE?</h2>
          <p className="leading-6 mb-4">
            WORKFORCE is the perfect platform for developers, tech enthusiasts,
            and creators to share their knowledge, insights, and experiences.
            Here is what sets it apart:
          </p>
          <ul className="list-disc pl-6 leading-6">
            <li>Engage with a community passionate about tech and coding</li>
            <li>Write and publish blogs with advanced text editing tools</li>
            <li>Discover and share cutting-edge ideas in technology</li>
            <li>
              Leverage a responsive, modern design for seamless collaboration
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Revolution</h2>
        <p className="leading-6">
          Ready to take your ideas to the next level? Join the community today
          and redefine the way you create and collaborate.
        </p>
        <Link href={"/"}>
          <Button className="p-5 mt-4 font-semibold ">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;

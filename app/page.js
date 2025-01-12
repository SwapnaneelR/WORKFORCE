// pages/index.js
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { auth } from "@/auth";

const Home = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
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
      </main>
      <TestimonialsPage />
    </>
  );
};

const TestimonialsPage = () => {
  return (
    <main className=" h-fill  flex items-center justify-center">
      <div className="max-w-4xl w-full sm:px-6 md:px-16  py-12">
        <h1 className="text-5xl font-bold text-center mb-8">Testemonials</h1>

        <Carousel opts={{ loop: true }} className="relative">
          {/* Carousel Content */}
          <CarouselContent>
            {/* Testimonial 1 */}
            <CarouselItem>
              <div className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <p className="text-xl font-semibold">
                  "Workforce has completely transformed the way I connect with
                  other tech enthusiasts. The platform is sleek and easy to
                  use!"
                </p>
                <span className="mt-4 text-sm font-medium">
                  - Jane Doe, Developer
                </span>
              </div>
            </CarouselItem>

            {/* Testimonial 2 */}
            <CarouselItem>
              <div className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <p className="text-xl font-semibold">
                  "The blogging tools on workforce are top-notch. It is so
                  simple to share my ideas and collaborate with others."
                </p>
                <span className="mt-4 text-sm font-medium">
                  - John Smith, Tech Blogger
                </span>
              </div>
            </CarouselItem>

            {/* Testimonial 3 */}
            <CarouselItem>
              <div className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <p className="text-xl font-semibold">
                  "I have never seen such a well-designed platform for sharing
                  knowledge. WORKFORCE is amazing!"
                </p>
                <span className="mt-4 text-sm font-medium">
                  - Emily Johnson, Designer
                </span>
              </div>
            </CarouselItem>

            {/* Testimonial 4 */}
            <CarouselItem>
              <div className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <p className="text-xl font-semibold">
                  "This platform truly fosters collaboration and creativity.
                  workforce is perfect for tech enthusiasts like me."
                </p>
                <span className="mt-4 text-sm font-medium">
                  - Michael Brown, Software Engineer
                </span>
              </div>
            </CarouselItem>

            {/* Testimonial 5 */}
            <CarouselItem>
              <div className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <p className="text-xl font-semibold">
                  "WF empowers creators with the tools they need to thrive. I
                  love being a part of this community!"
                </p>
                <span className="mt-4 text-sm font-medium">
                  - Sarah Wilson, Content Creator
                </span>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious></CarouselPrevious>

          <CarouselNext></CarouselNext>
        </Carousel>
      </div>
    </main>
  );
};

export default Home;

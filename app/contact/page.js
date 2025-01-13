// pages/contact.js
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center ">
        <h1 className="text-6xl font-bold">Contact Us</h1>
        <p className="mt-5 text-lg">
          We would love to hear from you! Fill out the form below or reach out
          via email :{" "}
          <a href="mailto:neel26ray@gmail.com" className="underline">
            neel26ray@gmail.com
          </a>
        </p>
        <a
          href="https://patreon.com/Swapnaneel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="p-2 mt-3 bg-green-600 text-white rounded"
          >
            Sponsor Workforce
          </button>
        </a>
      </div>

      <div className="max-w-xl mx-auto pt-0 px-8 rounded-lg shadow-md">
        <form action="#" method="POST">
          <div className="space-y-5">
            <div className="">
              <label htmlFor="name" className="block text-lg font-medium ">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium ">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium ">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
              ></textarea>
            </div>

            <div className="text-center gap-x-3 flex items-center justify-center">
              <Link href="/">
                <Button type="submit">Send Message</Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

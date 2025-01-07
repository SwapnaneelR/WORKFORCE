// pages/contact.js
import React from "react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold">Contact Us</h1>
        <p className="mt-5 text-lg ">
          We would love to hear from you! Fill out the form below or reach out
          via email : neel26ray@gmail.com
        </p>
      </div>

      <div className="max-w-2xl mx-auto pt-0 px-8 rounded-lg shadow-md">
        <form action="#" method="POST">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium ">
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
              <label htmlFor="email" className="block text-sm font-medium ">
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
              <label htmlFor="message" className="block text-sm font-medium ">
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

            <div className="text-center">
              <Button type="submit">Send Message</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

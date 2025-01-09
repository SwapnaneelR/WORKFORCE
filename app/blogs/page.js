"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
const Page = () => {
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Swapnaneel" },
      description: "This Blog tells you to do somethings",
      image:
        "https://images.pexels.com/photos/28277464/pexels-photo-28277464.jpeg",
      category: "Coding",
      title: "Mountains",
    },
  ];
  //   console.log(theme);
  return (
    <main className="min-h-screen   p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl shadow-4xl shadow-blue-500 overflow-hidden shadow-lg m-4"
          >
            <img
              className="w-full h-48 object-cover"
              src={post.image}
              alt={post.title}
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-2xl mb-2">{post.title}</h2>
              {/* <h2 className="font-semibold text-1xl m-2"> */}
              {/* {post.author?.name} */}
              {/* </h2> */}

              <p className="text-sm">{post.description}</p>
            </div>

            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
              <span className="text-sm  ">{formatDate(post._createdAt)}</span>
              <span className="text-sm border p-2 font-semibold ">
                {post.views} views
              </span>
            </div>
            <div className="px-6 py-4">
              <Link href={`/blogs/${post.title.toLowerCase()}`}>
                <Button>Read More</Button>
              </Link>
            </div>
          </div>
        ))}{" "}
      </div>
    </main>
  );
};

export default Page;

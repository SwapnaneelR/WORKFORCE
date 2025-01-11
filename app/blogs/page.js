import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { QUERY } from "@/sanity/lib/queries";

const Page = async () => {
  const posts = await client.fetch(QUERY);

  return (
    <main className="min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="max-w-sm rounded-md shadow-4xl shadow-blue-500 overflow-hidden shadow-lg m-4"
          >
            <div
              className="w-full p-5 bg-cover bg-center"
              style={{
                // Use the URL directly for the background image
                backgroundImage: post.image ? `url(/lifelabel.jpg)` : "none", // Fallback if image is missing
              }}
            >
              <div className="bg-black bg-opacity-40 w-full h-full flex flex-col justify-between">
                <div className="px-6 py-4 text-white">
                  <h2 className="font-bold text-2xl mb-2">{post.title}</h2>
                  <p className="text-sm">{post.description}</p>
                </div>

                <div className="px-6 pt-4 pb-2 flex justify-between items-center text-white">
                  <span className="text-sm">{formatDate(post._createdAt)}</span>
                  <span className="text-sm border p-2 font-semibold">
                    {post.views} views
                  </span>
                </div>

                <div className="px-6 py-4">
                  <Link href={`/blogs/${post.title.toLowerCase()}`}>
                    <Button>Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

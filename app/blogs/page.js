"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { QUERY } from "@/sanity/lib/queries";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch(QUERY);
        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
    console.log(posts);
  }, [posts]);

  if (loading)
    return (
      <p className="min-h-screen  items-center justify-center text-4xl">
        Loading...
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <main className="min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="max-w-sm h-[250px] w-[500px] rounded-md shadow-4xl shadow-blue-500 overflow-hidden shadow-lg m-4"
          >
            <div
              className="w-full p-5 bg-cover bg-center"
              style={{
                backgroundImage:
                  post.category === "Technology"
                    ? `url(/Tech.jpg)`
                    : post.category === "Lifestyle"
                      ? `url(/Lifestyle.jpg)`
                      : post.category === "Education"
                        ? `url(/lifelabel.jpg)`
                        : post.category === "Health"
                          ? `url(/Health.jpg)`
                          : `url(/Education.jpg)`,
              }}
            >
              <div className="bg-black bg-opacity-60 w-[350px] h-[220px] flex flex-col justify-between">
                <div className="px-6 py-2 text-white">
                  <h2 className="font-bold text-2xl mb-2">{post?.title}</h2>
                  <p className="text-sm">{post?.description}</p>
                </div>

                <div className="px-6 pt-4 pb-2 flex justify-between items-center text-white">
                  <span className="text-sm">
                    {formatDate(post?._createdAt)}
                  </span>
                  <span className="text-sm p-2 font-semibold">
                    {post?.views} views
                  </span>
                </div>

                <div className="px-6 py-4">
                  <Link href={`/blogs/${post?._id}`}>
                    <Button>Explore</Button>
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

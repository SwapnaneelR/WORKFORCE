import BackButton from "@/components/ui/BackButton";
import { POST_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import MarkdownIt from "markdown-it";
import View from "@/components/ui/View";
export default async function Page({ params }) {
  const id = (await params).id;
  const post = await client.fetch(POST_ID_QUERY, { id });
  const no = Math.floor(Math.random() * 5) + 1;
  const md = MarkdownIt();
  if (!post) {
    console.log("Post not found");
    return (
      <div className="text-center text-gray-600 mt-10">Post not found</div>
    );
  }
  const content = md.render(post.playground);
  // console.log(content);
  // const sourc=
  return (
    <main className="min-h-screen max-w-screen flex flex-col gap-8 px-6 md:px-12 lg:px-20 py-8 ">
      {/* Banner Section */}
      <section className="w-auto  rounded-md bg-zinc-700 ">
        <section className="relative w-full h-96">
          <Image
            src={`/banner${no}.jpg`} // Path to the image
            alt="Banner Image"
            layout="fill" // Makes the image fill the container
            objectFit="cover" // Ensures the image covers the entire section without distortion
            className="absolute z-0 rounded-md inset-0"
          />
          <div className="flex flex-row justify-between">
            <div className="relative z-10 px-6 py-12">
              <h1 className="text-4xl text-zinc-100 md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-zinc-100 mb-6">{post.description}</p>
              <div className="flex items-center gap-x-4">
                <span className="mr-4 font-semibold text-zinc-100 text-xl">
                  Author : {post.author.name}
                </span>
                <View id={id}></View>
              </div>
            </div>
            <div className="md:absolute md:top-4 md:right-5 md:p-9 md:visible ">
              <BackButton variant="outline">Go Back</BackButton>
            </div>
          </div>
        </section>

        {/* Playground Section */}
        <section className="rounded-lg  shadow-lg p-6">
          <div
            className="prose max-w-4xl prose-invert prose-h1:font-bold prose-h1:text-3xl prose-h2:font-semibold prose-h2:text-2xl prose-h3:font-medium prose-h3:text-xl prose-p:text-base prose-p:leading-7 prose-a:text-blue-300 prose-a:underline prose-ul:list-disc prose-ol:list-decimal prose-li:ml-6 text-zinc-100 font-mono p-10 break-words font-work-sans"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
      </section>
    </main>
  );
}

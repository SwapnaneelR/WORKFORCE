import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const id = (await params).id; // Extract `id` from the resolved `params`
  const session = await auth(); // Authenticate the user

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id }); // Fetch the user data
  if (!user) {
    return <p className="text-center text-red-500">User not found.</p>; // Handle the case where the user is not found
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-md  shadow-2xl shadow-blue-500 w-full bg-gray-100  rounded-lg p-14">
        <div className="text-center mb-6">
          {user.image && (
            <Image
              src={user.image}
              alt={`${user.name}'s profile picture`}
              className="w-24 h-24 rounded-full mx-auto shadow"
              width={126}
              height={126}
            />
          )}
          <h1 className="text-4xl font-semibold text-gray-800 mt-4">
            {user.name}
          </h1>
          <p className="text-gray-500 text-2xl">@{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

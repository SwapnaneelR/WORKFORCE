import { redirect } from "next/navigation";
import React from "react";
import { auth } from "@/auth";
import UserForm from "@/components/ui/UserForm";
const page = async () => {
  const session = await auth();
  if (!session) redirect(url("/"));
  return (
    <div className="min-h-screen">
      <UserForm></UserForm>
    </div>
  );
};

export default page;

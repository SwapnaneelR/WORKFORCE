import { redirect } from "next/navigation";
import React from "react";
import { auth } from "@/auth";
import { Playground } from "@/components/ui/Playground";
import { cookies } from "next/headers";
export default async function page() {
    const session = await auth();
      const cookieStore = await cookies();
        const formFilled = await cookieStore.get("formFilled");
    if (!session) redirect(url("/"));
      if (!formFilled || formFilled.value !== "true") {
    redirect("/create");
  }

    return (<>
        <main className="min-h-screen">
            <Playground/>
        </main>
    </>)
};
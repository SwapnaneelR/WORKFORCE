"use client";
import { useRouter } from "next/navigation"; // Usage: App router
import { Button } from "./button";

export default function Page() {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.back()}>
      Go Back
    </Button>
  );
}

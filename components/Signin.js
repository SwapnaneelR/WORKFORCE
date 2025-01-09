"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <Button
      className="mx-2"
      variant="outline"
      onClick={() => signIn("github", { redirectTo: "/" })}
    >
      Signin
    </Button>
  );
}

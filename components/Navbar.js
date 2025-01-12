"use client";
// components/Navbar.js
import Link from "next/link";
// import { signIn } from "@/auth";
import SignIn from "./Signin";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signOut, useSession } from "next-auth/react";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Navbar = () => {
  const session = useSession();
  function ImageDropdown() {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            {session.data?.user?.image && (
              <Image
                src={session.data.user.image}
                alt={session.data?.user?.name?.charAt(0) || "User"}
                height={40}
                width={40}
                className="my-0 mx-3 items-center rounded-full"
              />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>

            <DropdownMenuItem>Blog</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut} className="items-center">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }

  console.log(session);
  return (
    <nav className="p-4 background/50 z-10 sticky border-b top-0 backdrop-blur">
      <div className="flex justify-between items-center mx-auto container">
        <Link href="/" className="text-xl font-bold">
          WORKFORCE
        </Link>
        {/* Navigation Links - Hidden on small screens */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link href="/blogs">
            <p className="  hover:font-semibold">Blogs</p>
          </Link>
          <Link href="/about">
            <p className="  hover:font-semibold">About</p>
          </Link>
          <Link href="/contact">
            <p className="  hover:font-semibold">Contact</p>
          </Link>
        </div>
        {/* Signup/Login Buttons - Hidden on small screens */}
        <div className="hidden lg:flex">
          <ModeToggle className="items-center" />
          {/* <Button className="mx-2" variant="outline">
            Signup
          </Button> */}
          {session?.data == null ? (
            <SignIn />
          ) : (
            <>
              <div className="flex flex-row justify-center">
                <ImageDropdown />
              </div>
            </>
          )}
        </div>
        {/* Menu Button - Visible only on small screens */}
        <div className="md:hidden flex items-center">
          {/* Mode Toggle */}
          <ModeToggle />

          {/* Add margin between ModeToggle and Menu */}
          <Sheet>
            <SheetTrigger className="ml-4">Menu</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>WORKFORCE</SheetTitle>
                <div className="space-y-4 flex flex-col">
                  <Link href="/blogs">
                    <text className="hover:text-gray-400">Blogs</text>
                  </Link>
                  <Link href="/about">
                    <text className="hover:text-gray-200">About</text>
                  </Link>
                  <Link href="/contact">
                    <text className="hover:text-gray-400">Contact</text>
                  </Link>
                  <SignIn></SignIn>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

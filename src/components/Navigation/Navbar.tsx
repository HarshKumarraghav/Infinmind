"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const Navbar = () => {
  const Router = useRouter();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-900/10 dark:border-slate-300/10">
      <div className="container mx-auto flex flex-row justify-between items-center py-4 px-2">
        <div className="flex items-center justify-center md:mb-0 md:mr-4 gap-x-2">
          <Image
            width={20}
            height={20}
            src="/logo/logo.png"
            className="w-10 h-10 rounded-full"
            alt="logo"
          />
          <h1
            onClick={() => Router.push("/")}
            className="text-md md:text-2xl  flex gap-x-2 font-main font-bold items-end cursor-pointer"
          >
            InfiniMind.ai
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <button
            onClick={() => Router.push("/sign-in")}
            className="bg-primary py-2 px-4 rounded-full text-[10px]  md:text-sm text-white focus:outline-none hover__button"
          >
            Try Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

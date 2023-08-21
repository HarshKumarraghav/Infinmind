"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import UserNav from "./UserNav";

const Header = () => {
  const Router = useRouter();
  return (
    <div className="w-full h-14 border-b border-slate-900/10 dark:border-slate-300/10">
      <div className="container mx-auto flex flex-row justify-between items-center h-full px-2">
        <div className="flex items-center justify-center md:mb-0 md:mr-4 gap-x-2">
          <Image
            width={20}
            height={20}
            src="/images/logo.png"
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
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;

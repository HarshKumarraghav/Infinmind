"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserInfo = () => {
  const Router = useRouter();

  return (
    <div className="flex items-center justify-center md:mb-0 md:mr-4 gap-x-2">
      <Image
        width={20}
        height={20}
        src="/logo/logo.png"
        className="w-10 h-10 rounded-full"
        alt="logo"
      />
      <h1
        onClick={() => Router.push("/dashboard")}
        className="text-md md:text-2xl  flex gap-x-2 font-main font-bold items-end cursor-pointer"
      >
        InfiniMind.ai
      </h1>
    </div>
  );
};

export default UserInfo;

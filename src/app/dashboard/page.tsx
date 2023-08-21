"use client";
import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
const page = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default page;

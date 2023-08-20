"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
const page = () => {
  return (
    <div>
      page
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

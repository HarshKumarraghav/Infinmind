import { Sidebar } from "@/components/Navigation/Sidebar";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div
      className="w-full h-[calc(100vh-3.5rem)]"
      style={{
        background:
          "radial-gradient(600px at 431px 777px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      hello
      <div className="mb-8 space-y-4">hello world</div>
    </div>
  );
}

export default page;

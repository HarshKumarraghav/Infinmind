"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();
  const Router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      Router.push("/dashboard");
    }
  }, [session?.status, Router]);
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row">
      hrllo world
    </div>
  );
}

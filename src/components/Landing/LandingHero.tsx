"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const LandingHero = () => {
  const session = useSession();
  const Router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      Router.push("/dashboard");
    }
  }, [session?.status, Router]);

  return (
    <div className="font-bold pt-36  text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>
          Limitless Possibilities, One Platform:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            InfiniMind.AI
          </span>{" "}
        </h1>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        AI-powered Chatbot, Code, Video, Music, and Image Generation - All in
        One Place.
      </div>
      <div>
        <Link href={"/sign-in"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};

export default LandingHero;

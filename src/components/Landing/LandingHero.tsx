"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LandingHero = () => {
  const session = useSession();
  const Router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      Router.push("/dashboard");
    }
  }, [session?.status, Router]);

  return <div>LandingHero</div>;
};

export default LandingHero;

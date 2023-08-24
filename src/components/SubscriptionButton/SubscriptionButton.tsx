"use client";

import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { toast } from "../../../hooks/use-toast";
import { FiZap } from "react-icons/fi";

export const SubscriptionButton = ({ isPro = false }: { isPro: boolean }) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description:
          "Please try again later. If the problem persists, contact support.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "default" : "premium"}
      disabled={loading}
      onClick={onClick}
      className="text-white"
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <FiZap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

"use client";

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <BiMenu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 "
        style={{
          background:
            "radial-gradient(400px at 351px 97px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      >
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

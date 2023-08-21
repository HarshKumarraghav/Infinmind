"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

import { Badge } from "../ui/badge";

interface EveryTaskProps {
  label: string;
}

export const EveryTask = ({ label }: EveryTaskProps) => {
  const { theme } = useTheme();
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <div className="floating__avatar glow__background">
          <Badge className="ml-16 mb-4 text-white">{label}</Badge>
          {theme === "dark" ? (
            <Image
              src="/avatars/Avatar-dark.png"
              alt="avatar-light"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="/avatars/Avatar-light.png"
              alt="avatar-light"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm text-center"></p>
    </div>
  );
};

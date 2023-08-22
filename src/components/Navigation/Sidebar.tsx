"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { cn } from "@/lib/utils";
import {
  BsCameraVideo,
  BsChatLeftDots,
  BsImages,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FaCode } from "react-icons/fa";
// import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: RxDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: BsChatLeftDots,
    href: "/dashboard/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    href: "/dashboard/image",
    icon: BsImages,
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: BsCameraVideo,
    color: "text-orange-700",
    href: "/dashboard/video",
  },
  {
    label: "Music Generation",
    icon: BsMusicNoteBeamed,
    color: "text-emerald-500",
    href: "/dashboard/music",
  },
  {
    label: "Code Generation",
    icon: FaCode,
    color: "text-green-700",
    href: "/dashboard/code",
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div
      className="space-y-4 py-4 flex flex-col h-full bg-primary-foreground shadow-xl border-r"
      style={{
        background:
          "radial-gradient(600px at 431px 777px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14 gap-3">
          <Image
            width={20}
            height={20}
            src="/logo/logo.png"
            className="w-10 h-10 rounded-full"
            alt="logo"
          />
          <h1 className="text-md md:text-2xl  flex gap-x-2 font-main font-bold items-end cursor-pointer">
            InfiniMind.ai
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-gray-700 hover:bg-primary/10 rounded-lg transition",
                pathname === route.href
                  ? "bg-primary/10 text-gray-700 dark:text-gray-200"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} /> */}
    </div>
  );
};

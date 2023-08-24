import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import UserNav from "./UserNav";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { MobileSidebar } from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Dashheader = async () => {
  const isPro = false;
  const apiLimitCount = await getApiLimitCount();
  const currentUser: any = await getCurrentUser();
  return (
    <div className="w-full h-14 border-b border-slate-900/10 dark:border-slate-300/10">
      <div className="container mx-auto flex flex-row justify-between items-center h-full px-4">
        <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <UserNav currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Dashheader;

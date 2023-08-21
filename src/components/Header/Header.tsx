import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import UserNav from "./UserNav";
import UserInfo from "./UserInfo";
import getCurrentUser from "@/app/actions/getCurrentUser";

const Header = async () => {
  const currentUser: any = await getCurrentUser();
  return (
    <div className="w-full h-14 border-b border-slate-900/10 dark:border-slate-300/10">
      <div className="container mx-auto flex flex-row justify-between items-center h-full px-2">
        <UserInfo />
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <UserNav currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default Header;

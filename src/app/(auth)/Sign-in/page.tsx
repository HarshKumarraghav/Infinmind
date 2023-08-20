import LoginInform from "@/components/Forms/Loginform";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row">
      <div className="w-full h-16 fixed lg:pl-5 flex items-center gap-x-8 p-4  cursor-pointer z-10 ">
        <Link href="/" className=" text-2xl text-white">
          <ArrowLeftIcon />
        </Link>
      </div>
      <div className="lg:w-1/2 lg:h-full h-1/3 flex flex-col lg:justify-center items-center py-3 gap-3 bg-primary">
        <img src="/images/login.svg" alt="" className="w-full h-full" />
      </div>
      <div className="lg:w-1/2 lg:h-full lg:justify-evenly lg:bg-primary-light w-full h-2/3 flex flex-col items-center justify-evenly py-5">
        <div className="w-full flex items-center flex-col">
          <h1 className="text-2xl w-3/4 md:w-2/4 ">Let's sign you in.</h1>
          <h1 className="text-xl w-3/4 md:w-2/4 ">
            Welcome back. You've been missed!
          </h1>
        </div>
        <LoginInform />
        <div>
          Don't have an account?&nbsp;
          <Link
            href="/sign-up"
            className="text-primary font-semibold cursor-pointer"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

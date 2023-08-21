"use client";
import { useEffect, useState } from "react";
import { validateLoginInputs } from "../../../utils/auth";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react";
import { BiLogoGoogle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
const LoginInform = () => {
  const session = useSession();
  console.log(session);

  const { toast } = useToast();
  const Router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      Router.push("/dashboard");
    }
  }, [session?.status, Router]);
  // State to store login info
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  // State to show loading spinner
  const [isLoading, setIsLoading] = useState(false);
  // State to disable button if any of the input is empty
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // State to store validation errors
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });
  // Function to clear login info
  const ClearLoginInfo = () => {
    setLoginInfo({
      email: "",
      password: "",
    });
  };
  // Function to handle login
  const LoginHandler = () => {
    setIsLoading(true);
    signIn("credentials", {
      ...loginInfo,
      redirect: false,
    })
      .then((res) => {
        if (res?.error) {
          toast({
            title: "something went wrong",
            description: "Invalid credentials",
          });
        }
        if (res?.ok && !res?.error) {
          toast({
            title: "Login successful",
            description: "You are logged in",
          });
          Router.push("/dashboard");
        }
      })
      .finally(() => {
        ClearLoginInfo();
        setIsLoading(false);
      });
  };

  const SocialAction = (provider: string) => {
    setIsLoading(true);
    signIn(provider, { redirect: false })
      .then((res) => {
        if (res?.error) {
          toast({
            title: "something went wrong",
            description: "Invalid credentials",
          });
        }
        if (res?.ok && !res?.error) {
          toast({
            title: "Login successful",
            description: "You are logged in",
          });
          Router.push("/dashboard");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // Function to handle login
  const handleLogin = () => {
    if (!validateLoginInputs(loginInfo, setValidationErrors)) {
      LoginHandler();
    }
  };
  useEffect(() => {
    setIsButtonDisabled(!loginInfo.email || !loginInfo.password);
  }, [loginInfo]);
  return (
    <>
      <form
        className="flex flex-col items-center w-full gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <Input
          type="email"
          value={loginInfo.email}
          onChange={(e) => {
            setLoginInfo({
              ...loginInfo,
              email: e.target.value,
            });
          }}
          className="border w-3/4 md:w-2/4 h-12 p-2"
          placeholder="Email"
        />
        {validationErrors.email && (
          <p className="text-red-600">{validationErrors.email}</p>
        )}
        <Input
          type="password"
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
          className="border w-3/4 md:w-2/4 h-12 p-2"
          placeholder="Password"
        />
        {validationErrors.password && (
          <p className="text-red-600">{validationErrors.password}</p>
        )}

        <Button
          type="submit"
          variant={"ghost"}
          disabled={isButtonDisabled || isLoading}
          className="w-3/4 md:w-2/4 h-12 bg-primary text-white"
        >
          {isLoading ? (
            <span className="w-full flex items-center justify-center gap-x-2">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </span>
          ) : (
            <span>Login</span>
          )}
        </Button>
      </form>
      <div className="w-3/4 md:w-2/4 flex-col  text-white flex gap-x-3">
        <div className="relative">
          <div className=" absolute inset-0 flex items-center">
            <div className="w-full border-t " />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-black px-2 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>
        <div className="w-full mt-6 h-10 text-white flex gap-x-3">
          <Button
            className="flex items-center w-1/2 h-full bg-primary justify-center gap-x-2 text-white"
            onClick={() => SocialAction("google")}
          >
            <BiLogoGoogle size={20} />
            Google
          </Button>
          <Button
            className="flex items-center w-1/2 h-full bg-primary justify-center gap-x-2 text-white"
            onClick={() => SocialAction("github")}
          >
            <BsGithub size={20} />
            Github
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginInform;

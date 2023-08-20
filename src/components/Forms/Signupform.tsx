"use client";
import React, { useEffect, useState } from "react";
import { validateSignUpInputs } from "../../../utils/auth";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

const Signupform = () => {
  const Router = useRouter();
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const SignupHandler = async () => {
    setIsLoading(true);
    try {
      console.log(signupInfo);

      await axios.post("/api/register", signupInfo);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  // State to disable button if any of the input is empty
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // State to store validation errors
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleSignup = () => {
    if (!validateSignUpInputs(signupInfo, setValidationErrors)) {
      SignupHandler();
    }
  };
  useEffect(() => {
    setIsButtonDisabled(
      !signupInfo.name || !signupInfo.email || !signupInfo.password
    );
  }, [signupInfo]);
  return (
    <form
      className="flex flex-col items-center w-full gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignup();
      }}
    >
      <Input
        type="text"
        value={signupInfo.name}
        onChange={(e) => {
          setSignupInfo({ ...signupInfo, name: e.target.value });
        }}
        required
        className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
        placeholder="Full Name"
      />
      {validationErrors.name && (
        <span className="text-red-500 text-sm">{validationErrors.name}</span>
      )}
      <Input
        type="email"
        value={signupInfo.email}
        onChange={(e) => {
          setSignupInfo({ ...signupInfo, email: e.target.value });
        }}
        required
        className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
        placeholder="Email address"
      />
      {validationErrors.email && (
        <span className="text-red-500 text-sm">{validationErrors.email}</span>
      )}

      <Input
        type="password"
        value={signupInfo.password}
        onChange={(e) => {
          setSignupInfo({ ...signupInfo, password: e.target.value });
        }}
        required
        className="border w-3/4 md:w-2/4 h-12 rounded-md   placeholder:font-light placeholder:p-2  focus:outline-primary text-primary p-2"
        placeholder="Password"
      />
      {validationErrors.password && (
        <span className="text-red-500 text-sm">
          {validationErrors.password}
        </span>
      )}
      <Button
        type="submit"
        className="w-3/4 md:w-2/4 h-12 rounded-md bg-primary text-white"
        disabled={isLoading || isButtonDisabled}
      >
        {isLoading ? (
          <span className="w-full flex items-center justify-center gap-x-4">
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <span>Registering User...</span>
          </span>
        ) : (
          <span>Register</span>
        )}
      </Button>
    </form>
  );
};

export default Signupform;

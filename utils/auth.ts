import { LoginInfo, SignupInfo } from "../types/auth";
export const validateLoginInputs = (
  loginInfo: LoginInfo,
  setValidationErrors: any
) => {
  const errors: LoginInfo = {
    email: "",
    password: "",
  };

  // Validate email
  if (!loginInfo.email) {
    errors.email = "Please enter an email address";
  } else if (!/\S+@\S+\.\S+/.test(loginInfo.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate password for login and signup
  if (!loginInfo.password) {
    errors.password = "Please enter a password";
  } else if (loginInfo.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/\d/.test(loginInfo.password)) {
    errors.password = "Password must contain at least one number";
  } else if (!/[a-z]/.test(loginInfo.password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[A-Z]/.test(loginInfo.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/\W/.test(loginInfo.password)) {
    errors.password = "Password must contain at least one special character";
  }

  setValidationErrors(errors);

  // Return true if there are no validation errors
  return Object.keys(errors).length === 0;
};

export const validateSignUpInputs = (
  signupInfo: SignupInfo,
  setValidationErrors: any
) => {
  const errors: SignupInfo = {
    email: "",
    password: "",
    name: "",
  };

  // Validate email
  if (!signupInfo.email) {
    errors.email = "Please enter an email address";
  } else if (!/\S+@\S+\.\S+/.test(signupInfo.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate password
  if (!signupInfo.password) {
    errors.password = "Please enter a password";
  } else if (signupInfo.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/\d/.test(signupInfo.password)) {
    errors.password = "Password must contain at least one number";
  } else if (!/[a-z]/.test(signupInfo.password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[A-Z]/.test(signupInfo.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/\W/.test(signupInfo.password)) {
    errors.password = "Password must contain at least one special character";
  }
  // Validate first name
  if (!signupInfo.name) {
    errors.name = "Please enter your name";
  } else if (signupInfo.name.length < 2) {
    errors.name = "Please enter a valid name";
  }

  setValidationErrors(errors);
  // Return true if there are no validation errors
  return Object.keys(errors).length === 0;
};

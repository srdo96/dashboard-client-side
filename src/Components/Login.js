import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import fetcher from "./axiosInstance";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const Login = () => {
  const [signInWithEmailAndPassword, emailUser, emailLoading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = "/dashboard/read";
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    signInWithEmailAndPassword(email, password);
  };
  if (emailUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="p-8">
      <p>Admin: itachi@boss.com</p>
      <p>Pass: 123456</p>
      <form onSubmit={handleLogin}>
        <CustomInput
          type="email"
          id="email"
          className="my-2 p-2 border border-primary rounded-lg  "
          placeholder="Please Enter Email"
        />
        <CustomInput
          type="password"
          id="pass"
          className="p-2 border border-primary rounded-lg"
          placeholder="Please Enter Password"
        />
        <CustomButton type="submit" className="mt-2" label="Login" />
      </form>
    </div>
  );
};

export default Login;

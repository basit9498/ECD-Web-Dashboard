import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Eye from "../../assets/images/eye.svg";
import Button from "../../components/button/button";
import Google from "../../assets/images/google.svg";

const Login = () => {
  const [showPassword, setShowPasseword] = useState(true);
  return (
    <>
      <section className="sm:flex">
        <div className="login__banner hidden sm:block w-1/2  bg-slate-500"></div>
        <section className="sm:w-1/2 py-10 px-24 h-screen overflow-y-scroll scroll__bar">
          <div>
            <img src={Logo} alt="" className="h-28 w-28 block mx-auto" />
            <h1 className="text-3xl font-bold text-darkblue mt-8 text-center">
              Welcome to ECD
            </h1>
            <form className="mt-12">
              <div className="mb-5">
                <label className="block text-base text-darkblue">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full border mt-1 pl-4 focus:border-darkblue rounded-full"
                />
              </div>
              <div className="mb-5 relative">
                <img
                  src={Eye}
                  onClick={() => setShowPasseword(!showPassword)}
                  className="absolute bottom-4 right-2 cursor-pointer"
                />
                <label className="block text-base text-darkblue">
                  Password
                </label>
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="Enter your password"
                  className="h-12 w-full border mt-1 pl-4 focus:border-darkblue rounded-full"
                />
              </div>
              <div className="flex justify-between mt-30px">
                <label className="check__box flex items-center">
                  <input type="checkbox" />
                  <i></i>
                  <span className="text-darkblue text-sm ml-3">
                    Keep me logged in
                  </span>
                </label>
                <p className="text-sm text-darkblue underline">
                  Forgot password
                </p>
              </div>
              <Button
                text="Login"
                className="w-full bg-darkblue text-secondry mt-11 rounded-full"
              />
              <button className="flex justify-center items-center h-50px w-full border-2 mt-6 rounded-full">
                <img src={Google} alt="" />
                <span className="text-sm text-darkblue ml-4 ">
                  Log in with google
                </span>
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;

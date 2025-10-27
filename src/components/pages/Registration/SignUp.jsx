import React from "react";
import RegisterNav from "../../common/RegisterNav";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="sm:h-screen sm:w-screen sm:overflow-hidden bg-[#0c1035]">
        <RegisterNav />
        <div className="flex xl:flex-row flex-col  items-center">
          <div className="bg-[url(/signUpImage.c40a27bb.png)] xl:w-1/2 w-full xl:h-screen h-96 flex flex-col items-center justify-center text-2xl text-white tracking-widest backdrop-brightness-75 bg-center bg-cover">
            INSPIRED BY THE FUTURE:
            <p className="text-4xl font-bold shadow-2xl mt-5 text-center">
              THE PERSIAN CIEL DASHBOARD
            </p>
          </div>

          <div className="sm::w-1/2  flex flex-col justify-center text-left text-2xl sm:px-15 px-0 text-white mt-16 2xl:mt-0">
            <p className="text-3xl font-bold">WELCOME!</p>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Logging in...");
              }}
              className="flex flex-col  mt-7"
            >
                <label htmlFor="email" className="2xl:mt-4 mt-2 text-lg mb-1 font-medium">
                Name
              </label>
              <input
                type="email"
                name="email"
                autoComplete="username"
                placeholder="your full name ..."
                className="border border-gray-400 w-3xs rounded-xl text-sm py-2 px-4"
              />
              <label htmlFor="email" className="mt-2 2xl:mt-4 text-lg mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="username"
                placeholder="your email ..."
                className="border border-gray-400 w-3xs rounded-xl text-sm py-2 px-4"
              />
              <label
                htmlFor="password"
                className="mt-2 2xl:mt-4 text-lg mb-1 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="your passwpord ..."
                className="border border-gray-400 w-3xs rounded-xl text-sm py-2 px-4"
              />
            </form>
            <div className="items-center flex my-3 mt-4">
              <label className="relative inline-flex items-center cursor-pointer mr-2">
                <input type="checkbox" className="sr-only peer" />
                <div
                  className="group peer bg-[#0e172c] peer-checked:bg-[#3f79f8] rounded-full duration-300 w-12 h-6 
                    after:content-[''] after:duration-300 after:bg-white 
                    after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 
                    after:flex after:justify-center after:items-center 
                    peer-checked:after:translate-x-6 peer-hover:after:scale-95"
                ></div>
              </label>

              <span className="text-sm font-medium">Remember me</span>
            </div>

            <button className="bg-blue-600 mt-4 rounded-xl py-2 px-30 text-sm font-medium">
              SIGN UP
            </button>
            <p className="text-xs mt-2 mb-10 sm:mb-0">
              Don't have an account?{" "}
              <Link to="/signup" className="text-gray-400">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

import {
  CircleUserRound,
  KeyRound,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function RegisterNav() {
  return (
    <>
      <div className="flex justify-center  z-50 fixed top-5 left-0 right-0">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 h-20 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-lg flex justify-center items-center text-white gap-8 ">
          <Link to="/" className="flex flex-row gap-1 text-lg items-center">
            <LayoutDashboard className="w-5 h-5" />{" "}
            <span className="hidden sm:flex">Dashboard</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-row gap-1 text-lg items-center"
          >
            <UserRound className="w-5 h-5" />
            <span className="hidden sm:flex">Profile</span>
          </Link>
          <Link
            to="/signin"
            className="flex flex-row gap-1 text-lg items-center"
          >
            <CircleUserRound className="w-5 h-5" />{" "}
            <span className="hidden sm:flex">Sing In</span>
          </Link>
          <Link
            to="/signup"
            className="flex flex-row gap-1 text-lg items-center"
          >
            <KeyRound className="w-5 h-5" />{" "}
            <span className="hidden sm:flex">Sign up</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RegisterNav;

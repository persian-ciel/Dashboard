import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom"; 

function Welcome() {
  return (
    <div className="relative xl:h-[50vh] h-[20vh] xl:w-3/12 w-full bg-[url(/welcome-profile.309ed05e.png)] bg-cover rounded-xl px-6 py-5">
      <p className="font-bold text-xl">Welcome back</p>
      <p className="text-sm mt-2">Nice to meet you, Mark Johnson</p>

      <Link
        to="/" 
        className="absolute bottom-4 flex flex-row items-center cursor-pointer hover:scale-105 duration-100 ease-in-out"
      >
        <p className="text-sm mr-2">Tap to record</p>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default Welcome;

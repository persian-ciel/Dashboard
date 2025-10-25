import React, { use, useState } from "react";
import { useTheme } from "../../../theme/ThemeContext";

function Authors({ name, email, jobTitle, job, state, date, ImageSource }) {
  const { isDark } = useTheme();
  const isOnline = state.toLowerCase() === "online";
  return (
    <>
      <div className={`flex text-sm border-b border-gray-400 pb-2  `}>
        <div className="w-4/12 items-center flex">
          <img
            className="w-10 h-10 rounded-2xl mx-2 my-2"
            src={ImageSource}
            alt={name}
          />

          <div>
            <p className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
              {name}
            </p>

            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {" "}
              {email}
            </p>
          </div>
        </div>
        <div className="w-3/12 items-center flex">
          <div>
            <p className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
              {jobTitle}
            </p>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {" "}
              {job}
            </p>
          </div>
        </div>
        <div className={`w-3/12 items-center  flex  `}>
          <div
            className={` py-2 px-2 rounded-xl w-20 flex justify-center items-center font-medium ${
              isOnline
                ? ` ${isDark ? "bg-green-400 text-white" : "bg-green-600 text-white"}`
                : ` ${isDark ? "bg-transparent border text-white" : "bg-transparent border-black border text-black"}`
            }`}
          >
            {state}
          </div>
        </div>
        <div
          className={`w-3/12 items-center flex font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {date}
        </div>
      </div>
    </>
  );
}

export default Authors;

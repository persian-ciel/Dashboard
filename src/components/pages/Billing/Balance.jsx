import React from "react";
import { Building } from "lucide-react";
import { useTheme } from "../../../theme/ThemeContext";

function Balance() {
  const { isDark } = useTheme();
  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
          : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
      }  sm:w-[48.5%]  w-full  bg-cover rounded-2xl px-6 py-4 flex flex-col `}
    >
      <div
        className={`${
          isDark
            ? "bg-gradient-to-tl from-[#21325a] to-[#2b3855]"
            : "bg-gradient-to-tl from-[#e0e8f8] to-[#c0cce7]"
        }   rounded-2xl w-full h-5/12 px-6 py-4 flex flex-col `}
      >
        <p className={`text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>Credit Balance</p>
        <p className={`text-4xl font-bold  ${isDark ? "text-white" : "text-black"}`}>$25,215</p>
      </div>
      <div className="px-2">
        <div
          className={`${
            isDark ? "text-gray-400" : "text-gray-600"
          } font-bold text-xs mt-5 mb-2`}
        >
          NEWEST
        </div>
        <div className="flex  justify-between gap-4 items-center">
          <div className="flex justify-between items-center">
            <div>
              <div
                className={`${
                  isDark ? "bg-gray-600" : "bg-gray-300 text-black"
                } rounded-full w-10 h-10 flex justify-center items-center mr-2`}
              >
                <Building />
              </div>{" "}
            </div>{" "}
            <div>
              <p
                className={`${
                  isDark ? "text-white" : " text-black"
                } font-bold `}
              >
                Bill & Taxes
              </p>
              <p className={`${isDark ? "text-gray-400" : " text-gray-600"} `}>
                Today, 16:36
              </p>
            </div>
          </div>
          <div className={` ${isDark ? "text-white" : "text-black"} font-bold`}>-$154.50</div>
        </div>
      </div>
    </div>
  );
}

export default Balance;

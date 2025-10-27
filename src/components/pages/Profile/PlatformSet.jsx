import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
function PlatformSetting() {
  const { isDark } = useTheme();
  return (
    <>
      <div
        className={`${
          isDark
            ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
            : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
        } xl:w-[38%] 2xl:w-[39%]  xl:h-[50vh] h-full w-full rounded-2xl px-6 py-5 flex flex-col gap-4 overflow-x-scroll hide-scrollbar`}
      >
        <p
          className={`font-bold text-xl ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Platform Settings
        </p>
        <div>
          <p
            className={`text-xs uppercase font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            account
          </p>
          <div className="items-center flex my-3 ">
            <label className="relative inline-flex items-center cursor-pointer mr-2">
              <input type="checkbox" className="sr-only peer" />
              <div
                className="group peer bg-[#0e172c] peer-checked:bg-white rounded-full duration-300 w-14 h-6 
                    after:content-[''] after:duration-300 after:bg-white peer-checked:after:bg-[#0e172c]
                    after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 
                    after:flex after:justify-center after:items-center 
                    peer-checked:after:translate-x-8 peer-hover:after:scale-95"
              ></div>
            </label>

            <span className={`text-sm  ${isDark ? "text-white" : "text-gray-800"}`}>
              Email me when someone follows me
            </span>
          </div>

          <div className="items-center flex my-3 ">
            <label class="relative inline-flex items-center cursor-pointer mr-2">
              <input type="checkbox" class="sr-only peer" />
              <div
                class="group peer bg-[#0e172c] peer-checked:bg-white rounded-full duration-300 w-14 h-6 
                    after:content-[''] after:duration-300 after:bg-white peer-checked:after:bg-[#0e172c]
                    after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 
                    after:flex after:justify-center after:items-center 
                    peer-checked:after:translate-x-8 peer-hover:after:scale-95"
              ></div>
            </label>

            <span className={`text-sm  ${isDark ? "text-white" : "text-gray-800"}`}>
              Email me when someone answers on my post
            </span>
          </div>

          <div className="items-center flex my-3 ">
            <label class="relative inline-flex items-center cursor-pointer mr-2">
              <input type="checkbox" class="sr-only peer" />
              <div
                class="group peer bg-[#0e172c] peer-checked:bg-white rounded-full duration-300 w-14 h-6 
                    after:content-[''] after:duration-300 after:bg-white peer-checked:after:bg-[#0e172c]
                    after:rounded-full after:absolute after:h-4 after:w-4 after:top-1 after:left-1 
                    after:flex after:justify-center after:items-center 
                    peer-checked:after:translate-x-8 peer-hover:after:scale-95"
              ></div>
            </label>

            <span className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
              Email me when someone mentions me
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlatformSetting;

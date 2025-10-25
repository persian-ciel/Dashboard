import React, { useState } from "react";
import { useTheme } from "../../../theme/ThemeContext";
import ProLogo from "/download.png";
import { Box, StickyNote, WrenchIcon } from "lucide-react";

function CustInfo() {
  const { isDark } = useTheme();
  const [activeButton, setActiveButton] = useState("overview");

  const buttons = [
    { id: "overview", label: "OVERVIEW", icon: Box },
    { id: "teams", label: "TEAMS", icon: StickyNote },
    { id: "projects", label: "PROJECTS", icon: WrenchIcon },
  ];
  return (
    <>
      <div
        className={`${
          isDark
            ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
            : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
        }  w-full  bg-cover rounded-2xl px-6 py-4 flex justify-between items-center`}
      >
        <div className="flex sm:flex-row flex-col items-center text-center sm:text-left">
          <img src={ProLogo} className="rounded-xl sm:mr-5 mr-0 sm:mb-0 mb-5 w-15 h-15 " />
          <div>
            <p
              className={` font-bold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Mark Johnson
            </p>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              mark@simmmple.com
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-4">
          {buttons.map((btn) => {
            const Icon = btn.icon;
            const isActive = activeButton === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveButton(btn.id)}
                className={`items-center flex py-2 px-6 rounded-xl  transition-colors duration-500 ease-in-out ${
                  isActive
                    ? isDark
                      ? "bg-[#ce324a] text-white"
                      : "bg-[#3b6aeb] text-white"
                    : "bg-transparent text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <span className="flex items-center text-sm">
                  <Icon className="inline w-4 h-4 mr-2" /> {btn.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CustInfo;

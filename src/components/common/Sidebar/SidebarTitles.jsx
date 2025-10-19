import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../../theme/ThemeContext";

function SidebarTitle({ name, Icon, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const { isDark } = useTheme();

  return (
    <Link
      to={to}
      className={`flex gap-4 items-center px-4 py-3 rounded-2xl w-full transition-all duration-300 
        ${
          isActive
            ? `${
                isDark ? "bg-[#182544] text-white" : "bg-[#b0c5f7] text-black "
              }`
            : `${
                isDark
                  ? "hover:bg-[#162341] text-gray-200 dark:text-gray-100"
                  : "hover:bg-[#b8caf5] text-black  "
              }`
        }
        
        `}
    >
      <div
        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors duration-300 
          ${
            isActive
              ? `${isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb] "}`
              : `${isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb] "}`
          }
          ${isDark ? "" : "bg-[#3b6de2] text-black"}
        `}
      >
        {Icon && (
          <Icon
            className={`w-5 h-5 ${isActive ? "text-white" : "text-white"}`}
          />
        )}
      </div>
      <span
        className={`font-medium ${
          isActive
            ? `${isDark ? "text-white" : "text-black "}`
            : `${isDark ? "text-white" : "text-black "}`
        }`}
      >
        {name}
      </span>
    </Link>
  );
}

export default SidebarTitle;

import React from "react";
import { useTheme } from "../../../theme/ThemeContext";

function PersonalInfo() {
  const { isDark } = useTheme();
  const info = [
    { title: "Full Name:", value: "Mark Johnson" },
    { title: "Mobile:", value: "(44) 123 1234 123" },
    { title: "Email:", value: "mark@simmmple.com" },
    { title: "Location:", value: "United States" },
  ];

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
          : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
      } xl:w-4/12 xl:h-[50vh] h-full w-full rounded-2xl px-6 py-5 flex flex-col gap-4 overflow-x-scroll hide-scrollbar`}
    >
      <p className={`font-bold text-xl ${isDark ? "text-white" : "text-gray-800"}`}>
        Profile Information
      </p>

      <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
        Hi, I’m Mark Johnson. Decisions: If you can’t decide, the answer is no. 
        If two equally difficult paths, choose the one more painful in the short term 
        (pain avoidance is creating an illusion of equality).
      </p>

      {info.map((item, index) => (
        <p key={index} className={`text-sm`}>
          <span className={`${isDark ? "text-gray-400" : "text-gray-600"} font-medium`}>
            {item.title}
          </span>{" "}
          <span className={`${isDark ? "text-white" : "text-gray-800"}`}>{item.value}</span>
        </p>
      ))}
    </div>
  );
}

export default PersonalInfo;

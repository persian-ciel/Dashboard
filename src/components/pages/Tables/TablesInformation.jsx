import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
import AuthorTable from "./AutorTable";
import ProjectTable from "./ProjectTable";

function TablesInformation() {
  const { isDark } = useTheme();

  return (
    <>
      <main className="flex flex-col gap-4 mt-4 w-full">
        <div
          className={`${
            isDark
              ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
              : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
          }  w-full  rounded-2xl px-6 py-4 flex flex-col`}
        >
          <div
            className={`font-bold text-xl flex mb-5 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Authors table
          </div>
          <AuthorTable />
        </div>

        <div
          className={`${
            isDark
              ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
              : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
          }  w-full  rounded-2xl px-6 py-4 flex flex-col`}
        >
          <div
            className={`font-bold text-xl flex mb-5 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Projects table
          </div>
          <ProjectTable />
        </div>

        <div
          className={`${
            isDark ? "text-gray-400" : "text-gray-900"
          } text-sm my-4`}
        >
          @ 2025, Made with ❤️ by Persian Ciel Timfor a better web
        </div>
      </main>
    </>
  );
}

export default TablesInformation;

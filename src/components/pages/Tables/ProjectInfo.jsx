import React from "react";
import { useTheme } from "../../../theme/ThemeContext";

function ProjectInfo({ project, buget, state, progress }) {
  const { isDark } = useTheme();
  return (
    <>
      <div className={`min-w-[800px] sm:min-w-[600px] flex text-sm border-b border-gray-400 pb-2  `}>
        <div className="w-4/12 items-center flex">
          <div>
            <p className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
              {project}
            </p>
          </div>
        </div>
        <div className="w-3/12 items-center flex">
          <div>
            <p className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
              {buget}
            </p>
          </div>
        </div>
        <div className={`w-3/12 items-center  flex  `}>
          <div
            className={` py-2 px-2 rounded-xl w-20 flex  items-center font-medium ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {state}
          </div>
        </div>
        <div className="w-3/12 items-center flex gap-2">
          <span
            className={` font-bold ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {progress}%
          </span>

          <div className="w-1/2 h-1 bg-blue-950 rounded-full overflow-hidden">
            <div
              className={`h-1 ${
                isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb]"
              } rounded-full transition-all duration-700`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;

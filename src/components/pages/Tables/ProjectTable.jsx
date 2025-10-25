import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
import ProjectInfo from "./ProjectInfo";

function ProjectTable() {
  const { isDark } = useTheme();
  const projectInfo = [
    {
      projects: "Chakra Vision UI Version",
      bugets: "$14,000",
      states: "Working",
      progresses: "60",
    },
    {
      projects: "Add Progress Track",
      bugets: "$3,000",
      states: "Done",
      progresses: "100",
    },
    {
      projects: "Fix Platform Errors",
      bugets: "Not set",
      states: "Canceled",
      progresses: "30",
    },
    {
      projects: "Launch our Mobile App",
      bugets: "$32,000",
      states: "Canceled",
      progresses: "0",
    },
    {
      projects: "Add the New Pricing Page",
      bugets: "$2,300",
      states: "Done",
      progresses: "100",
    },
  ];
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div
          className={` min-w-[800px] sm:min-w-[600px] flex text-sm border-b-2 border-gray-400 pb-2 ${
            isDark ? "text-gray-300" : "text-gray-500"
          } `}
        >
          <div className="w-4/12">PROJECT</div>
          <div className="w-3/12">BUDGET</div>
          <div className="w-3/12">STATUS</div>
          <div className="w-3/12">COMPLETION</div>
        </div>
        {projectInfo.map((item) => (
          <ProjectInfo
            project={item.projects}
            buget={item.bugets}
            state={item.states}
            progress={item.progresses}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectTable;

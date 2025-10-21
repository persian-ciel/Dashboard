import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
import GaugeChart from "./SatChat";
import SafetyScore from "./TrackingChart";

function DashboardTiles() {
  const { isDark } = useTheme();
  return (
    <main className="flex flex-wrap gap-4 mt-4 w-full">
      <div className="bg-[url(/cardimgfree1.jpg)] xl:w-[40%] w-full h-64 bg-cover rounded-2xl px-6 py-7">
        <p className="text-gray-400">Welcome back,</p>
        <p className="text-white font-bold text-2xl">Mark Johnson</p>
        <br />
        <p className="text-gray-400">Glad to see you again!</p>
        <p className="text-gray-400">Ask me anything.</p>
      </div>

      <div
        className={`${
          isDark
            ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
            : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
        } xl:w-[23%] w-[48.5%] h-64 bg-cover rounded-2xl px-6 py-4 flex flex-col justify-between`}
      >
        <div>
          <p
            className={`font-bold text-xl ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Satisfaction Rate
          </p>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            From all projects
          </p>
        </div>
        <GaugeChart />
      </div>

      <div
        className={`${
          isDark
            ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
            : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
        } xl:w-[32%] w-[48.5%] h-64 bg-cover rounded-2xl px-6 py-4 flex flex-col justify-between`}
      >
        <p
          className={`font-bold text-xl ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Referral Tracking
        </p>
        <div className="justify-between flex flex-row relative ">
          <div className="flex flex-col w-[45%] absolute bottom-0 left-0 mb-5">
            <div className={`${isDark ? "bg-[#0e172c]" : "bg-[#d5e0f8] "}  px-2 py-2 rounded-xl mt-2`}>
              <p className="text-gray-500 text-sm">Invited</p>
              <p
                className={`${
                  isDark ? " text-white " : "text-black"
                } font-bold text-xl `}
              >
                145 people
              </p>
            </div>
            <div className={`${isDark ? "bg-[#0e172c]" : "bg-[#d5e0f8] "}  px-2 py-2 rounded-xl mt-2`}>
              <p className="text-gray-500 text-sm">Bonus</p>
              <p
                className={`${
                  isDark ? " text-white " : "text-black"
                } font-bold text-xl `}
              >
                1,465
              </p>
            </div>
          </div>
          <div className="w-[49%] absolute bottom-0 right-0">
            <SafetyScore />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardTiles;

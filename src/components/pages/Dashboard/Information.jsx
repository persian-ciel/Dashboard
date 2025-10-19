import React from "react";
import { useTheme } from "../../../theme/ThemeContext";

function InformationTiles({ Tilte, Value, Icon }) {
  const { isDark } = useTheme();
  return (
    <>
      <div className={`w-1/4 justify-between items-center flex ${isDark ? "bg-[#0e172c]" : "bg-[#d5e0f8] "}  rounded-2xl px-4 py-3 `}>
        <div >
          <p className="text-gray-500 text-sm">{Tilte}</p>
          <p className={`${isDark ? " text-white " : "text-black"} font-bold text-xl `}>{Value}</p>
        </div>
        <div className={`w-10 h-10 rounded-2xl ${isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb] "} flex items-center justify-center`}>
            {Icon && <Icon className="text-white w-5 h-5" />}</div>
      </div>
    </>
  );
}

export default InformationTiles;

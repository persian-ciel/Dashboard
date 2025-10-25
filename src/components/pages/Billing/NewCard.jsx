import React from "react";
import { Pencil } from "lucide-react";
import { useTheme } from "../../../theme/ThemeContext";

function NewCrad({ cardNumber }) {
  const { isDark } = useTheme();
  return (
    <div
      className={`w-[48.5%] my-3 flex border justify-between items-center ${
        isDark ? "border-gray-400" : " border-gray-600"
      } rounded-xl px-6 py-4`}
    >
      <div>
        <p className={` ${isDark ? "text-white" : "text-black"}`}>
          {cardNumber}
        </p>
      </div>
      <div>
        <Pencil
          className={`w-5 h-5 cursor-pointer ${
            isDark ? "text-white" : "text-black"
          }`}
        />
      </div>
    </div>
  );
}

export default NewCrad;

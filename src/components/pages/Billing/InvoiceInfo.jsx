import React from "react";
import { useTheme } from "../../../theme/ThemeContext";

function InvoiceInfo({ date, code, total }) {
  const { isDark } = useTheme();
  return (
    <div className="flex justify-between items-center my-3">
      <div>
        <p className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
          {date}
        </p>
        <p className={` ${isDark ? "text-white" : "text-black"}`}>
          {code}
        </p>
      </div>
      <div className={` ${isDark ? "text-white" : "text-black"}`}>{total}</div>
    </div>
  );
}

export default InvoiceInfo;

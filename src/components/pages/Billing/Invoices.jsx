import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
import InvoiceInfo from "./InvoiceInfo";

function Invoices() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
          : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
      } w-full h-full bg-cover rounded-2xl px-6 py-4 flex flex-col`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <p
          className={`${
            isDark ? "text-white" : "text-black"
          } font-bold text-xl`}
        >
          Invoices
        </p>
        <button
          className={`rounded-xl px-4 py-2 transform transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer ${
            isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb]"
          }`}
        >
          View All
        </button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="flex flex-col gap-2">
          <InvoiceInfo date="March, 01, 2020" code="#MS-415646" total="$180" />
          <InvoiceInfo
            date="February, 10, 2021"
            code="#RV-126749"
            total="$250"
          />
          <InvoiceInfo date="April, 05, 2020" code="#QW-103578" total="$120" />
          <InvoiceInfo date="March, 01, 2020" code="#MS-415646" total="$180" />
          <InvoiceInfo
            date="February, 10, 2021"
            code="#RV-126749"
            total="$250"
          />
          <InvoiceInfo date="April, 05, 2020" code="#QW-103578" total="$120" />
        </div>
      </div>
    </div>
  );
}

export default Invoices;

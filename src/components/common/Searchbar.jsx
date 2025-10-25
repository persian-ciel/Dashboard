import { Search } from "lucide-react";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";

function SearchBar() {
  const { isDark } = useTheme();
  return (
    <div className={`flex items-center border  rounded-2xl px-3 py-2 sm:w-64 w-32 ${isDark ? "bg-[#0e172c] border-gray-600" : "bg-[#d5e0f8] border-gray-300"}  mr-4`}>
      <button className="text-gray-500 hover:text-gray-800">
        <Search className="w-5 h-5" />
      </button>
      <input
        type="text"
        placeholder="Type here..."
        className={`flex-grow outline-none text-sm ${isDark ? "text-gray-300" : "text-gray-800"}  px-2`}
      />
    </div>
  );
}

export default SearchBar;

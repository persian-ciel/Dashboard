import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center border border-gray-600 rounded-xl px-3 py-1 w-64 bg-[#121d36]">
      <button className="text-gray-500 hover:text-gray-800"><Search /></button>
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow outline-none text-sm text-gray-300 px-2"
      />
    </div>
  );
}

export default SearchBar;

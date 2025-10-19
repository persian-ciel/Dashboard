import React from "react";
import SearchBar from "../../common/Searchbar";
import { CircleUserRound, Menu, Settings, Bell } from "lucide-react";
import ThemeToggle from "../../../theme/ThemeToggle";
import { useTheme } from "../../../theme/ThemeContext";

function NavBar({ name }) {
  const { isDark } = useTheme();
  return (
    <>
      <div className={`h-1/12 w-full flex justify-between mt-2 items-center mb-3 ${isDark ? "text-white" : "text-black"} `}>
        <div className="text-3xl font-bold">{name}</div>
        <div className="flex flex-row justify-center items-center">
            <SearchBar />
            <CircleUserRound className="cursor-pointer"/> <span className="mx-2 cursor-pointer">Sing In</span>
            <Menu className="mr-2 xl:hidden flex " />
            <Settings className="mx-2 cursor-pointer" />
            <Bell  className="mx-2 cursor-pointer"/>
            <ThemeToggle />
        </div>

      </div>
    </>
  );
}

export default NavBar;

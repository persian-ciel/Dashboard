import React, { useState } from "react";
import NavBar from "../../common/Nav/Nav";
import CustInfo from "./CustInfo";
import Welcome from "./Welcome";
import PersonalInfo from "./PersonalInfo";
import { useTheme } from "../../../theme/ThemeContext";
import PlatformSetting from "./platform";

function ProfileIndex({ toggleSidebar }) {
    const { isDark } = useTheme();
  return (
    <>
      <NavBar name="Profile" toggleSidebar={toggleSidebar} />
      <main className="flex flex-wrap gap-4 mt-4 w-full">
        <CustInfo />
        <Welcome />
        <PersonalInfo />
        <PlatformSetting />
        <div
          className={`${
            isDark ? "text-gray-400" : "text-gray-900"
          } text-sm my-4`}
        >
          @ 2025, Made with ❤️ by Persian Ciel Timfor a better web
        </div>
      </main>
    </>
  );
}

export default ProfileIndex;

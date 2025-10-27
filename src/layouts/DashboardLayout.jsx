// DashboardLayout.jsx
import React, { useState } from "react";
import SidebarMenu from "../components/common/Sidebar/Sidebar";
import { useTheme } from "../theme/ThemeContext";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar, current state:", sidebarOpen); // لاگ برای دیباگ
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden bg-cover bg-no-repeat bg-center transition-all duration-500 ${
        isDark
          ? "xl:bg-[url(/background.webp)] bg-[url(/background-mobile.jpg)]"
          : "xl:bg-[url(/v904-nunny-012.jpg)] bg-[url(/v904-nunny-012-mbile.jpg)]"
      } flex xl:flex-row flex-col`}
    >
      <SidebarMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 p-6 text-white flex flex-col w-full">
        <main className="flex-1 overflow-y-hidden">
          <Outlet context={{ toggleSidebar }} /> {/* انتقال toggleSidebar به صفحات */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
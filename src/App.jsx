import React, { useState } from "react";
import SidebarMenu from "./components/common/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardIndex from "./components/pages/Dashboard";
import TablesIndex from "./components/pages/Tables";
import { useTheme } from "./theme/ThemeContext";
import BillingIndex from "./components/pages/Billing/Index";
import ProfileIndex from "./components/pages/Profile/Index";

function App() {
  const { isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    
    <BrowserRouter>
    
      <div
        className={`min-h-screen w-full overflow-x-hidden bg-cover bg-no-repeat bg-center transition-all duration-500 ${
          isDark
            ? "xl:bg-[url(/background.webp)] bg-[url(/background-mobile.jpg)]"
            : "xl:bg-[url(/v904-nunny-012.jpg)] bg-[url(/v904-nunny-012-mbile.jpg)]"
        } flex xl:flex-row flex-col`}
      >
        <SidebarMenu
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex-1 p-6 text-white flex flex-col w-full">
          <main className="flex-1 overflow-y-hidden">
            <Routes>
              <Route
                path="/"
                element={<DashboardIndex toggleSidebar={toggleSidebar} />}
              />
              <Route
                path="/tables"
                element={<TablesIndex toggleSidebar={toggleSidebar} />}
              />
              <Route
                path="/billing"
                element={<BillingIndex toggleSidebar={toggleSidebar} />}
              />
              <Route path="/profile" element={<ProfileIndex toggleSidebar={toggleSidebar} />} />
              <Route path="/signin" element={<div>Sign In Page</div>} />
              <Route path="/signup" element={<div>Sign Up Page</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

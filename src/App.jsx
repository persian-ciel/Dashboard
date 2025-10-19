import SidebarMenu from "./components/common/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardIndex from "./components/pages/Dashboard";
import TablesIndex from "./components/pages/Tables";
import { useTheme } from "./theme/ThemeContext";
import ThemeToggle from "./theme/ThemeToggle";

function App() {
  const { isDark } = useTheme();

  return (
    <BrowserRouter>
      <div
        className={`h-screen w-screen overflow-hidden bg-cover transition-all duration-500 ${
          isDark
            ? "xl:bg-[url(/background.webp)] bg-[url(/background-mobile.jpg)]"
            : "xl:bg-[url(/v904-nunny-012.jpg)] bg-[url(/v904-nunny-012-mbile.jpg)]"
        }  flex`}
      >
        <SidebarMenu />

        <div className="flex-1 p-6 text-white  flex flex-col">
        

          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardIndex />} />
              <Route path="/tables" element={<TablesIndex />} />
              <Route path="/billing" element={<div>Billing Page</div>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
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

import SidebarMenu from "./components/common/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import DashboardIndex from "./components/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-cover bg-[url(/background.webp)] flex">
        <SidebarMenu />

        
        <div className="flex-1 p-6 text-white">
          <Routes>
            <Route path="/" element={<DashboardIndex />} />
            <Route path="/tables" element={<div>Tables Page</div>} />
            <Route path="/billing" element={<div>Billing Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="/signin" element={<div>Sign In Page</div>} />
            <Route path="/signup" element={<div>Sign Up Page</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

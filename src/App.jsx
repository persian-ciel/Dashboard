import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardIndex from "./components/pages/Dashboard";
import TablesIndex from "./components/pages/Tables";
import BillingIndex from "./components/pages/Billing/Index";
import ProfileIndex from "./components/pages/Profile/Index";
import SignUp from "./components/pages/Registration/SignUp";
import SignIn from "./components/pages/Registration/SignIn";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardIndex />} />
          <Route path="/tables" element={<TablesIndex />} />
          <Route path="/billing" element={<BillingIndex />} />
          <Route path="/profile" element={<ProfileIndex />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

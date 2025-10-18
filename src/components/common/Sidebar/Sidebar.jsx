import React from "react";
import {
  Home,
  ChartNoAxesColumn,
  CreditCard,
  UserRoundPen,
  StickyNote,
  Rocket,
} from "lucide-react";
import SidebarTitle from "./SidebarTitles";

function SidebarMenu() {
  return (
    <div className="w-2/12 h-full items-center  ml-4 hidden xl:flex">
      <div className="h-[95%] w-full bg-[#0e172c] rounded-lg px-4 py-6 flex-col flex gap-4">
        <SidebarTitle name="Dashboard" Icon={Home} to="/" />
        <SidebarTitle name="Tables" Icon={ChartNoAxesColumn} to="/tables" />
        <SidebarTitle name="Billing" Icon={CreditCard} to="/billing" />

        <div className="px-4 py-2 font-bold text-white">Account Pages</div>

        <SidebarTitle name="Profile" Icon={UserRoundPen} to="/profile" />
        <SidebarTitle name="Sign In" Icon={StickyNote} to="/signin" />
        <SidebarTitle name="Sign Up" Icon={Rocket} to="/signup" />
      </div>
    </div>
  );
}

export default SidebarMenu;

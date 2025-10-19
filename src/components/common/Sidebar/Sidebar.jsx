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
import { useTheme } from "../../../theme/ThemeContext";

function SidebarMenu() {
  const { isDark } = useTheme();

  const Titles = [
    { name: "Dashboard", Icon: Home, to: "/" },
    { name: "Tables", Icon: ChartNoAxesColumn, to: "/tables" },
    { name: "Billing", Icon: CreditCard, to: "/billing" },
    { name: "Profile", Icon: UserRoundPen, to: "/profile" },
    { name: "Sign In", Icon: StickyNote, to: "/signin" },
    { name: "Sign Up", Icon: Rocket, to: "/signup" },
  ];
  return (
    <div className="w-2/12 h-full items-center  ml-4 hidden xl:flex">
      <div className={`h-[95%] w-full ${isDark ? "bg-[#0e172c]" : "bg-[#d5e0f8]"}  rounded-lg px-4 py-6 flex-col flex gap-4`}>
        

        {Titles.map((title, index) => (
          <React.Fragment key={index}>
            {title.name === "Profile" && (
              <div className={`px-4 py-2 font-bold ${isDark ? "text-white" : "text-black"}`}>
                Account Pages
              </div>
            )}
            <SidebarTitle name={title.name} Icon={title.Icon} to={title.to} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SidebarMenu;

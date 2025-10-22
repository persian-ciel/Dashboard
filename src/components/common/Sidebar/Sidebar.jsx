import React, { useRef, useEffect } from "react";
import SidebarTitle from "./SidebarTitles";
import { useTheme } from "../../../theme/ThemeContext";
import { ChartNoAxesColumn, CreditCard, Home, Rocket, StickyNote, UserRoundPen } from "lucide-react";

function SidebarMenu({ isOpen, onClose }) {
  const { isDark } = useTheme();
  const sidebarRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const Titles = [
    { name: "Dashboard", Icon: Home, to: "/" },
    { name: "Tables", Icon: ChartNoAxesColumn, to: "/tables" },
    { name: "Billing", Icon: CreditCard, to: "/billing" },
    { name: "Profile", Icon: UserRoundPen, to: "/profile" },
    { name: "Sign In", Icon: StickyNote, to: "/signin" },
    { name: "Sign Up", Icon: Rocket, to: "/signup" },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`
        h-full
        xl:flex xl:w-2/12 xl:ml-4 xl:static
        fixed top-0 left-0 w-64 z-50
        ${isOpen ? "translate-x-0 z-50" : "-translate-x-full"}
        xl:translate-x-0 transition-transform duration-300 ease-in-out
      `}
    >
      <div
        className={`h-[95%] w-full ${
          isDark ? "bg-[#0e172c]" : "bg-[#d5e0f8]"
        } rounded-lg px-4 py-6 flex-col flex gap-4 xl:m-4 m-2`}
      >
        {Titles.map((title, index) => (
          <React.Fragment key={index}>
            {title.name === "Profile" && (
              <div
                className={`px-4 py-2 font-bold ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
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

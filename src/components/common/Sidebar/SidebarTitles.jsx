import React from "react";
import { Link } from "react-router-dom";

function SidebarTitle({ name, Icon, to }) {
  return (
    <Link
      to={to}
      className="flex gap-4 items-center hover:bg-[#162341] px-4 py-3 rounded-2xl w-full"
    >
      <div className="w-10 h-10 rounded-2xl bg-[#ce324a] flex items-center justify-center">
        {Icon && <Icon className="text-white w-5 h-5" />}
      </div>
      <span className="text-white font-medium">{name}</span>
    </Link>
  );
}

export default SidebarTitle;

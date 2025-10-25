import React from "react";
import { useTheme } from "../../../theme/ThemeContext";
import { Pencil } from "lucide-react";
import NewCrad from "./NewCard";

function PaymentMethod() {
  const { isDark } = useTheme();
  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-tl from-[#0e172c] to-[#22335a]"
          : "bg-gradient-to-tl from-[#d5e0f8] to-[#b2c0df]"
      } w-full  bg-cover rounded-2xl px-6 py-4 flex flex-col `}
    >
      <div className="flex justify-between items-center">
        <div>
          <p
            className={`${
              isDark ? "text-white" : "text-black"
            } font-bold text-xl`}
          >
            Payment Method
          </p>
        </div>
        <div>
          <button
            className={`rounded-xl px-4 py-2 transform transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer ${
              isDark ? "bg-[#ce324a]" : "bg-[#3b6aeb]"
            } `}
          >
            Add New Card
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between overflow-y-auto hide-scrollbar">
        <NewCrad cardNumber={"7812 2339 0823 XXXX"}/>

        <NewCrad cardNumber={"7812 2339 0823 XXXX"}/>
        <NewCrad cardNumber={"7812 2339 0823 XXXX"}/><NewCrad cardNumber={"7812 2339 0823 XXXX"}/><NewCrad cardNumber={"7812 2339 0823 XXXX"}/>
      </div>
    </div>
  );
}

export default PaymentMethod;

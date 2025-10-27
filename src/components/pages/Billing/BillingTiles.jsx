import React from "react";
import CardInfo from "./card";
import Balance from "./Balance";
import PaymentMethod from "./PaymentMethod";
import Invoices from "./Invoices";
import { useTheme } from "../../../theme/ThemeContext";

function BillingTiles() {
  const { isDark } = useTheme();
  return (
    <div className="flex flex-col gap-4 mt-4 w-full">
      <main className="flex flex-wrap xl:flex-nowrap gap-4 w-full">
        <div className="flex flex-wrap gap-4 xl:w-2/3 w-full 2xl:h-[78vh] xl:h-[69vh]">
          <div className="flex flex-wrap gap-4 w-full h-full overflow-y-auto hide-scrollbar">
            <CardInfo />
            <Balance />
            <PaymentMethod />
          </div>
        </div>

        <div className="xl:w-[31%] w-full 2xl:h-[78vh] xl:h-[69vh]">
          <Invoices />
        </div>
      </main>

      <div
        className={`${isDark ? "text-gray-400" : "text-gray-900"} text-sm my-4`}
      >
        @ 2025, Made with ❤️ by Persian Ciel Timfor a better web
      </div>
    </div>
  );
}

export default BillingTiles;

import React from "react";
import NavBar from "../../common/Nav/Nav";
import BillingTiles from "./BillingTiles";

function BillingIndex({ toggleSidebar }) {
  return (
    <>
      <NavBar name="Billing" toggleSidebar={toggleSidebar} />
      <BillingTiles />
    </>
  );
}

export default BillingIndex;

import React from "react";
import NavBar from "../../common/Nav/Nav";
import BillingTiles from "./BillingTiles";
import { useOutletContext } from "react-router-dom";

function BillingIndex() {
  const { toggleSidebar } = useOutletContext();
  return (
    <>
      <NavBar name="Billing" toggleSidebar={toggleSidebar} />
      <BillingTiles />
    </>
  );
}

export default BillingIndex;

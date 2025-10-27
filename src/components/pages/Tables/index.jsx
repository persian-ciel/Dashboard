import React from "react";
import NavBar from "../../common/Nav/Nav";
import TablesInformation from "./TablesInformation";
import { useOutletContext } from "react-router-dom";

function TablesIndex() {
  const { toggleSidebar } = useOutletContext();
  return (
    <>
      <NavBar name="Tables" toggleSidebar={toggleSidebar}/>
      <TablesInformation />
      
    </>
  );
}

export default TablesIndex;

import React from "react";
import NavBar from "../../common/Nav/Nav";
import TablesInformation from "./TablesInformation";

function TablesIndex({ toggleSidebar }) {
  return (
    <>
      <NavBar name="Tables" toggleSidebar={toggleSidebar}/>
      <TablesInformation />
      
    </>
  );
}

export default TablesIndex;

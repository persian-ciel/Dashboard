import React from "react";
import SearchBar from "../../Searchbar";

function NavBar({ name }) {
  return (
    <>
      <div className="h-1/12 w-full flex justify-between">
        <div>{name}</div>
        <div>
            <SearchBar />
        </div>
      </div>
    </>
  );
}

export default NavBar;

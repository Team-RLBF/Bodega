import React from "react";
import { AddItem } from "./AddItem.jsx";
import { SearchBar } from "./SearchBar.jsx";

export const TabsContainer = () => {
  return (
    <div className="flex flex-row m-2 px-5 justify-between bg-gray-200 ">
      <AddItem />
      <SearchBar />
      <div></div>
    </div>
  );
};

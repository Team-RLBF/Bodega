import React from "react";
import { AddItem } from "./AddItem.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { Tabs } from "./Tabs.jsx";

export const TabsContainer = () => {
  return (
    <div>
      <div className="flex flex-row m-2 px-5 justify-between bg-gray-200 ">
        <AddItem />
        <SearchBar />
        <div></div>
      </div>
      <Tabs />
    </div>
  );
};

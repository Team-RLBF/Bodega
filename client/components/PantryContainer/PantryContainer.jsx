import React from "react";
import PantryItem from "./PantryItem.jsx";

const PantryContainer = () => {
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          <PantryItem />
          <PantryItem />
        </ul>
      </div>
    </div>
  );
};

export default PantryContainer;

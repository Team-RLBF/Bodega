import React from "react";
import ShoppingItem from "./ShoppingItem.jsx";

const ShoppingContainer = () => {
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          <ShoppingItem />
          <ShoppingItem />
        </ul>
      </div>
    </div>
  );
};

export default ShoppingContainer;

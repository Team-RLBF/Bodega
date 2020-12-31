import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingItem from "./ShoppingItem.jsx";
import { getShoppingItems } from "../../store/actions/shoppingActions.js";

const ShoppingContainer = () => {
  const shoppingItems = useSelector((state) => state.shopping.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingItems());
  }, []);
  const sortItem = (a,b) => {
    if(a.item_name < b.item_name) { return -1; }
  if(a.item_name > b.item_name) { return 1; }
  return 0
  }
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {shoppingItems.sort((a,b) => sortItem(a,b)).map((item, i) => {
            return <ShoppingItem key={`item${i}`} newItem={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingContainer;

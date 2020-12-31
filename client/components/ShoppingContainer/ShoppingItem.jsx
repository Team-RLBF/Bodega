import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getShoppingItems,
} from "../../store/actions/shoppingActions";
import UpdateButton from "./UpdateButton.jsx";
import DeleteButton from "./DeleteButton.jsx";
import MinusButton from "./MinusButton.jsx";
import AddButton from "./AddButton.jsx";


const ShoppingItem = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shopping.shoppingList);

  useEffect(() => {
    dispatch(getShoppingItems());
  }, [dispatch]);
  console.log(shoppingList);

  return (
    <>
      <li>
        <div className=" flex flex-row justify-between px-4 py-4 sm:px-6">
          <div className="flex flex-column items-center justify-between pl-5">
            <p className="flex items-center text-sm text-gray-500">Category</p>
            <p className="text-lg font-bold text-blue-700 truncate">
              Grocery Item
            </p>
            <div className="ml-2 flex-shrink-0 flex">
              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                1/10
              </p>
            </div>
          </div>

          <div className="flex flex-column justify-center items-center mt-2 ">
            <p className="text-3xl font-semibold text-blue-700  truncate">3</p>
            <div className="flex flex-row">
              <MinusButton />
              <AddButton />
            </div>
          </div>
          <div className=" flex flex-column justify-center items-center mt-2 pr-5">
            <UpdateButton />
            <DeleteButton />
          </div>
        </div>
      </li>
    </>
  );
};

export default ShoppingItem;

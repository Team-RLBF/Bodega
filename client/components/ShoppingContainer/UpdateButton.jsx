import React from "react";
import { useDispatch } from 'react-redux';
import {
  loadShoppingItem,
  updateShoppingItem,
  UPDATE_SHOPPING_ITEM,
} from "../../store/actions/shoppingActions";

const UpdateButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        // id="shopping-update-btn"
        onClick={() => dispatch(updateShoppingItem('inside update comp'))}
        type="button"
        className="items-center m-1 w-24 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update
      </button>
    </>
  );
};

export default UpdateButton;

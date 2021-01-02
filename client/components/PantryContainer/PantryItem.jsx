import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPantryItems } from "../../store/actions/pantryActions";
import UpdateButtonPantry from "./UpdateButtonPantry.jsx";
import DeleteButtonPantry from "./DeleteButtonPantry.jsx";
import MinusButtonPantry from "./MinusButtonPantry.jsx";
import AddButtonPantry from "./AddButtonPantry.jsx";
import AddFromPantryBtn from "./AddFromPantryBtn.jsx";
import AddParPantry from './AddParPantry.jsx';
import MinusParPantry from './MinusParPantry.jsx';
import Notification from "./Notification.jsx";

//Individual Pantry item component
//Pulls in newItem as prop from container
const PantryItem = ({ newItem }) => {
  const { item_name, category, qty, note, unit, _id, par } = newItem;

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <li>
        <div className=" flex flex-row justify-between px-4 py-4 sm:px-6">
          <div className="flex flex-column items-center justify-between w-1/4">
            <p className="flex items-center text-sm text-gray-500">
              {category}
            </p>
            <p className="text-lg font-bold text-blue-700 truncate">
              {item_name}
            </p>
            <AddFromPantryBtn _id={_id} showAlert={setShowAlert} />
          </div>

          <div className="flex flex-row justify-around w-2/5">
            <div className="flex flex-column justify-center items-center mt-2 ">
              <div>
                <strong>In Stock</strong>
              </div>
              <p className="text-3xl font-semibold text-blue-700  truncate">
                {qty}
              </p>
              <div className="flex flex-row">
                <MinusButtonPantry _id={_id} />
                <AddButtonPantry _id={_id} />
              </div>
            </div>

            <div className="flex flex-column justify-center items-center mt-2 ">
              <div>
                <strong>Required Stock</strong>
              </div>
              <p className="text-3xl font-semibold text-blue-700  truncate">
                {par}
              </p>
              <div className="flex flex-row">
                <MinusParPantry _id={_id} />
                <AddParPantry _id={_id} />
              </div>
            </div>
          </div>

          <div className=" flex flex-column justify-center items-center mt-2 pr-5">
            <UpdateButtonPantry item={newItem} />
            <DeleteButtonPantry _id={_id} />
          </div>
        </div>
        {showAlert && <Notification showAlert={setShowAlert} />}
      </li>
    </>
  );
};

export default PantryItem;
import React from "react";
import PantryItem from "./PantryItem.jsx";

const PantryContainer = () => {
  const shoppingItems = useSelector((state) => state.shopping.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingItems());
  }, []);
  console.log("shopping items", shoppingItems);
  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {shoppingItems.map((item, i) => {
            return <ShoppingItem key={`item${i}`} newItem={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default PantryContainer;

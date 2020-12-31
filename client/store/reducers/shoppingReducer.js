import { LOAD_SHOPPING_ITEM } from "../actions/shoppingActions.js";

// const initialState = {
//   shoppingList: [{ itemName: "Milk", category: "Dairy", qty: 3 }],
//   pantryList: [],
//   editedShoppingItem: {},
//   editedPantryItem: {},
// };

const shoppingReducer = (state = { shoppingList: [] }, action) => {
  switch (action.type) {
    case LOAD_SHOPPING_ITEM: {
      console.log(action.payload);
      const newShoppingList = {
        ...state,
        shoppingList: [...action.payload],
      };
      console.log(newShoppingList);
      return newShoppingList;
    }
    default:
      return state;
  }
};

export default shoppingReducer;

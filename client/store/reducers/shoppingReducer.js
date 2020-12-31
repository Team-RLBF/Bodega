import { LOAD_SHOPPING_ITEM, DELETE_SHOPPING_ITEM, UPDATE_SHOPPING_ITEM, ADD_QTY, MINUS_QTY } from "../actions/shoppingActions.js";

const initialState = {
  shoppingList: [{ id: 1, itemName: "Milk", category: "Dairy", qty: 3 }, { id: 2, itemName: "Eggs", category: "Fridge", qty: 12 }],
  pantryList: [],
  editedShoppingItem: {},
  editedPantryItem: {},
};

const shoppingReducer = (state = initialState, action) => {
  let shoppingList;
  let id;
  switch (action.type) {
    case LOAD_SHOPPING_ITEM: {
      // console.log(action.payload);
      const newShoppingList = {
        ...state,
        shoppingList: [...action.payload],
      };
      // console.log(newShoppingList);
      return newShoppingList;
    }
    case DELETE_SHOPPING_ITEM:
      shoppingList = state.shoppingList.slice();
      // console.log(shoppingList)
      let itemToRemove = shoppingList.find(p => p.id === action.payload);
      let indexToRemove = shoppingList.indexOf(itemToRemove);
      shoppingList.splice(indexToRemove, 1);
      // console.log(shoppingList)
      const newShoppingList = {
        ...state,
        shoppingList
      };

      return newShoppingList;
    //working; pulling in action payload correctly
    case UPDATE_SHOPPING_ITEM:
      shoppingList = state.shoppingList.slice();
      

      return {
        ...state,

      }
    case ADD_QTY:
      shoppingList = state.shoppingList.slice();
      id = action.payload;
      console.log(id);
      let indexToChange = shoppingList.indexOf(shoppingList.find(p => p.id === id))
      console.log(shoppingList[indexToChange].qty)
      shoppingList[indexToChange].qty += 1;
      console.log(shoppingList)
      return {
        ...state,
        shoppingList
      }
    case MINUS_QTY:
      shoppingList = state.shoppingList.slice();
      id = action.payload;
      indexToChange = shoppingList.indexOf(shoppingList.find(p => p.id === id))
      shoppingList[indexToChange].qty -= 1;
      return {
        ...state,
        shoppingList
      }
    default:
      return state;
  }
};

export default shoppingReducer;

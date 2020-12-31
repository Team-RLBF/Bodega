import { LOAD_SHOPPING_ITEM, LOAD_EDITED_ITEM, ADD_QTY, MINUS_QTY } from "../actions/shoppingActions.js";

const shoppingReducer = (state = { shoppingList: [], updatedItem:{} }, action) => {
 
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
   
    case LOAD_EDITED_ITEM:{
      const itemToBeUpdated = {
        ...state,
        updatedItem: action.payload,
      }    

      return itemToBeUpdated
    }

    default:
      return state;
  }
};

export default shoppingReducer;

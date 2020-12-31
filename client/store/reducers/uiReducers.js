import { TOGGLE_TABS } from "../actions/uiActions.js";

const uiReducer = (
  state = { displayShopping: true, displayPantry: false },
  action
) => {
  switch (action.type) {
    case TOGGLE_TABS: {
      console.log(action.payload);
      return {
        displayShopping: action.payload.displayShopping,
        displayPantry: action.payload.displayPantry,
      };
    }
    default:
      return state;
  }
};

export default uiReducer;

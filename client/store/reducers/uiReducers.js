import { TOGGLE_TABS, DISPLAY_EDITOR } from "../actions/uiActions.js";

const initialState = {
  displayShopping: true,
  displayPantry: false,
  displayModal: false,
  isEdit: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TABS: {
      console.log(action.payload);
      return {
        ...state,
        displayShopping: action.payload.displayShopping,
        displayPantry: action.payload.displayPantry,
      };
    }
    case DISPLAY_EDITOR: {
      return {
        ...state,
        displayModal: action.payload.displayModal,
        isEdit: action.payload.isEdit,
      };
    }

    default:
      return state;
  }
};

export default uiReducer;

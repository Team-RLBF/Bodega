import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer.js";
import uiReducer from "./uiReducers.js";

const reducers = combineReducers({
  shopping: shoppingReducer,
  ui: uiReducer,
});

export default reducers;

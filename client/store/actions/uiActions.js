export const TOGGLE_TABS = "TOGGLE_TABS";
export const toggleTabs = (displayShopping, displayPantry) => ({
  type: TOGGLE_TABS,
  payload: { displayShopping, displayPantry },
});

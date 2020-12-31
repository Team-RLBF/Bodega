import axios from "axios";

const incomingData = [{ itemName: "Milk", category: "Dairy", qty: 3 }, { itemName: "Eggs", category: "Fridge", qty: 12 }];

// Get Shopping Items
export const getShoppingItems = () => (dispatch) => {
  axios.get("/api/shopping").then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

// Load Shopping Item
export const LOAD_SHOPPING_ITEM = "LOAD_SHOPPING_ITEM";
export const loadShoppingItem = (items) => ({
  type: LOAD_SHOPPING_ITEM,
  payload: items,
});

// Add Shopping Items
export const ADD_SHOPPING_ITEM = "ADD_SHOPPING_ITEM";
export const addShoppingItem = (item) => (dispatch) => {
  axios.post("/api/shopping/submit", item).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

// Delete Shopping Items
export const DELETE_SHOPPING_ITEM = "DELETE_SHOPPING_ITEM";
export const deleteShoppingItem = (id) => (dispatch) => {
  console.log('inside action', id);
  axios.delete(`./api/shopping/remove/${id}`).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

// Update Shopping Item
export const UPDATE_SHOPPING_ITEM = "UPDATE_SHOPPING_ITEM";
export const updateShoppingItem = (id) => (
  // axios.put(`./api/shopping/update/${id}`).then(({ data }) => {
  //   dispatch(loadShoppingItem(data));
  // });
  { type: UPDATE_SHOPPING_ITEM, payload: 'from within update action'}
);

// Checkout Basket
export const CHECKOUT_BASKET = "CHECKOUT_BASKET";
export const checkoutBasket = (shoppingList) => (dispatch) => {
  axios.post("./api/shopping/checkout/").then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const ADD_QTY = 'ADD_QTY';
export const addQty = (id) => ({
  type: ADD_QTY,
  payload: id
});

export const MINUS_QTY = 'MINUS_QTY';
export const minusQty = (id) => ({
  type: MINUS_QTY,
  payload: id
});
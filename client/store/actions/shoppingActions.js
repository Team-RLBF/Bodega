import axios from "axios";

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

export const LOAD_EDITED_ITEM = "LOAD_EDITED_ITEM";
export const loadEditedItem = (item) => ({
  type: LOAD_EDITED_ITEM,
  payload: item,
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
  axios.delete(`/api/shopping/remove/${id}`).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

// Update Shopping Item
export const UPDATE_SHOPPING_ITEM = "UPDATE_SHOPPING_ITEM";
export const updateShoppingItem = (item) => (dispatch) => {
  axios.post(`/api/shopping/update/${item._id}`, item).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

// Checkout Basket
export const CHECKOUT_BASKET = "CHECKOUT_BASKET";
export const checkoutBasket = (shoppingList) => (dispatch) => {
  axios.post("/api/shopping/checkout/").then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const ADD_LIST_QTY = "ADD_QTY";
export const addListQty = (id) => (dispatch) => {
  axios.post(`/api/shopping/listUp/${id}`).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const MINUS_LIST_QTY = "MINUS_QTY";
export const minusListQty = (id) => (dispatch) => {
  axios.post(`/api/shopping/listDown/${id}`).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const ADD_BUY_QTY = "ADD_QTY";
export const addBuyQty = (id) => (dispatch) => {
  axios.post(`/api/shopping/buyUp/${id}`).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const MINUS_BUY_QTY = "MINUS_QTY";
export const minusBuyQty = (id) => (dispatch) => {
  axios.post(`/api/shopping/buyDown/${id}`).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const CHECKOUT_BTN = "CHECKOUT_BTN";
export const checkoutBtn = () => (dispatch) => {
  axios.post("/api/shopping/checkout").then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

export const ADD_FROM_PANTRY = "ADD_FROM_PANTRY";
export const addFromPantry = (id) => (dispatch) => {
  console.log(id, "pantry id thing");
  axios.post(`/api/shopping/addFromPantry/${id}`).then(({ data }) => {
    dispatch(loadShoppingItem(data));
  });
};

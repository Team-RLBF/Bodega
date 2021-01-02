import axios from "axios";

// Get Shopping Items
export const getPantryItems = () => (dispatch) => {
  axios.get("/api/pantry").then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

// Load Shopping Item
export const LOAD_PANTRY_ITEM = "LOAD_PANTRY_ITEM";
export const loadPantryItem = (items) => ({
  type: LOAD_PANTRY_ITEM,
  payload: items,
});

// Add Shopping Items
export const ADD_PANTRY_ITEM = "ADD_PANTRY_ITEM";
export const addPantryItem = (item) => (dispatch) => {
  console.log("pantry item", item);
  axios.post("/api/pantry/submit", item).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

//Deletes item from pantry
export const DELETE_PANTRY_ITEM = "DELETE_PANTRY_ITEM";
export const deletePantryItem = (id) => (dispatch) => {
  axios.delete(`/api/pantry/delete/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

// Update Pantry Item
export const UPDATE_PANTRY_ITEM = "UPDATE_PANTRY_ITEM";
export const updatePantryItem = (item) => (dispatch) => {
  axios.put(`/api/pantry/update/${item._id}`, item).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

//Increments In Stock qty in pantry
//PUT to /api/pantry/itemup/:id
//Relative to AddButtonPantry component
export const ADD_QTY = "ADD_QTY";
export const addQty = (id) => (dispatch) => {
  axios.put(`/api/pantry/itemup/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

//Decrements In Stock qty in pantry
//PUT to /api/pantry/itemdown/:id
//Relative to MinusButtonPantry component
export const MINUS_QTY = "MINUS_QTY";
export const minusQty = (id) => (dispatch) => {
  axios.put(`/api/pantry/itemdown/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

//Decrements Required Stock qty in pantry
//PUT to /api/pantry/parup/:id
export const ADD_PAR = "ADD_PAR";
export const addPar = (id) => (dispatch) => {
  axios.put(`/api/pantry/parup/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

export const MINUS_PAR = "MINUS_PAR";
export const minusPar = (id) => (dispatch) => {
  axios.put(`/api/pantry/pardown/${id}`).then(({ data }) => {
    dispatch(loadPantryItem(data));
  });
};

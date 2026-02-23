import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsById: {}, // { [plantId]: { id, name, price, image, quantity } }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload; // {id,name,price,image}
      if (!state.itemsById[plant.id]) {
        state.itemsById[plant.id] = { ...plant, quantity: 1 };
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state.itemsById[id]) state.itemsById[id].quantity += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (!state.itemsById[id]) return;
      state.itemsById[id].quantity -= 1;
      if (state.itemsById[id].quantity <= 0) delete state.itemsById[id];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.itemsById[id];
    },
    clearCart: (state) => {
      state.itemsById = {};
    }
  },
});

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selectores útiles (para header y cart)
export const selectCartItemsArray = (state) => Object.values(state.cart.itemsById);

export const selectTotalItems = (state) =>
  Object.values(state.cart.itemsById).reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalCost = (state) =>
  Object.values(state.cart.itemsById).reduce((sum, item) => sum + item.quantity * item.price, 0);

export const selectIsInCart = (id) => (state) => Boolean(state.cart.itemsById[id]);
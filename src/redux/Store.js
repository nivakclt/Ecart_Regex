import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cardSlice";

const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  },
});

export default store;
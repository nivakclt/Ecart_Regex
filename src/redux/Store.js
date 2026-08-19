import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cardSlice";
import wishListReducer from './Slices/wishSlices'

const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    wishListReducer,
  },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";

const store = configureStore({
  reducer: {
    productReducer,
  },
});

export default store;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async API call
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    sessionStorage.setItem("products",JSON.stringify(response.data.products))
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    pending: false,
    products: [],
    error: "",
    productCopy:[],
  },

  reducers: {
    searchProducts: (state, action) => {
      const searchkey = action.payload.toLowerCase();
      state.products = state.productCopy.filter((product) =>
        product.title.toLowerCase().includes(searchkey)
      );
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.pending = false;
      state.products = action.payload.products;
      state.productCopy = action.payload.products;
      });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.pending = false;
      state.error = "api call failed";
    });

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.pending = true;
    });
  },
});

export default productSlice.reducer;
export const { searchProducts } = productSlice.actions;
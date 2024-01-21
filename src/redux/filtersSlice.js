import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 brand: "",
 price: { min: "", max: "" },
 mileage: { min: "", max: "" },
};

export const filtersSlice = createSlice({
 name: "filters",
 initialState,
 reducers: {
  setBrand: (state, action) => {
   state.brand = action.payload;
  },
  setPrice: (state, action) => {
   state.price = action.payload;
  },
  setMileage: (state, action) => {
   state.mileage = action.payload;
  },
  updateFilters: (state, action) => {
   state.brand = action.payload.brand;
   state.price = action.payload.price;
   state.mileage = action.payload.mileage;
  },
 },
});

export const { setBrand, setPrice, setMileage, updateFilters } =
 filtersSlice.actions;
export default filtersSlice.reducer;

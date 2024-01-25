import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 brand: "",
 price: "",
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
   const { min, max } = action.payload;
   state.mileage = {
    min: min || state.mileage.min,
    max: max || state.mileage.max,
   };
  },

  updateFilters: (state, action) => {
   state.brand = action.payload.brand;
   state.price = action.payload.price;
   state.mileage = action.payload.mileage;
  },

  resetFilters: (state) => {
   state.brand = initialState.brand;
   state.price = initialState.price;
   state.mileage = initialState.mileage;
  },
 },
});

export const { setBrand, setPrice, setMileage, updateFilters, resetFilters } =
 filtersSlice.actions;
export default filtersSlice.reducer;

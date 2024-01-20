import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsAsync } from "./operations";

const initialState = {
 adverts: [],
 loading: false,
 error: null,
};

const advertsSlice = createSlice({
 name: "adverts",
 initialState,
 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(fetchAdvertsAsync.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(fetchAdvertsAsync.fulfilled, (state, action) => {
    state.loading = false;
    state.adverts = action.payload;
   })
   .addCase(fetchAdvertsAsync.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   });
 },
});

export default advertsSlice.reducer;

export const { someAction } = advertsSlice.actions;

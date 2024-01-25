import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsAsync } from "./operations";

const initialState = {
 adverts: [],
 loading: false,
 error: null,
 pagination: {
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  itemsPerPage: 12,
 },
};

const advertsSlice = createSlice({
 name: "adverts",
 initialState,
 reducers: {
  clearAdverts: (state) => {
   state.adverts = [];
   state.loading = false;
   state.error = null;
  },
  incrementPage: (state) => {
   if (state.pagination.currentPage < state.pagination.totalPages) {
    state.pagination.currentPage += 1;
   }
  },
 },

 extraReducers: (builder) => {
  builder
   .addCase(fetchAdvertsAsync.pending, (state) => {
    state.loading = true;
   })
   .addCase(fetchAdvertsAsync.fulfilled, (state, action) => {
    if (!state.adverts.find((advert) => advert.id === action.payload[0].id)) {
     state.adverts = [...state.adverts, ...action.payload];
    }

    if (action.payload.length < state.pagination.itemsPerPage) {
     state.pagination.totalPages = state.pagination.currentPage;
    } else {
     state.pagination.totalPages = state.pagination.currentPage + 1;
    }
   })
   .addCase(fetchAdvertsAsync.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   });
 },
});

export const { clearAdverts, incrementPage } = advertsSlice.actions;
export default advertsSlice.reducer;

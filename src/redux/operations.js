import { createAsyncThunk } from "@reduxjs/toolkit";
import { advertsApi } from "../services/api";

export const fetchAdvertsAsync = createAsyncThunk(
 "adverts/fetchAdverts",
 async ({ page, limit }, { rejectWithValue }) => {
  try {
   const adverts = await advertsApi.fetchAdverts({ page, limit });
   return adverts;
  } catch (error) {
   return rejectWithValue(error.message);
  }
 }
);

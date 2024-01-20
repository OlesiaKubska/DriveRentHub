import { createAsyncThunk } from "@reduxjs/toolkit";
import { advertsApi } from "../services/api";

export const fetchAdvertsAsync = createAsyncThunk(
 "adverts/fetchAdverts",
 async ({ page, limit, filters }, { rejectWithValue }) => {
  try {
   const adverts = await advertsApi.fetchAdverts({ page, limit, ...filters });
   return adverts;
  } catch (error) {
   return rejectWithValue(error.message);
  }
 }
);

// export const loadAdverts = createAsyncThunk(
//  "adverts/load",
//  async (_, { rejectWithValue }) => {
//   try {
//    const adverts = await advertsApi.fetchAdverts();
//    return adverts;
//   } catch (error) {
//    return rejectWithValue(error.message);
//   }
//  }
// );

// export const addAdvert = createAsyncThunk(
//  "adverts/add",
//  async (advertData, { rejectWithValue }) => {
//   try {
//    const response = await advertsApi.createAdvert(advertData);
//    return response.advertData;
//   } catch (error) {
//    return rejectWithValue(error.message);
//   }
//  }
// );

// export const editAdvert = createAsyncThunk(
//  "adverts/edit",
//  async ({ id, updateData }, { rejectWithValue }) => {
//   try {
//    const response = await advertsApi.updateAdvert({ id, updateData });
//    return response.data;
//   } catch (error) {
//    return rejectWithValue(error.message);
//   }
//  }
// );

// export const removeAdvert = createAsyncThunk(
//  "adverts/remove",
//  async (id, { rejectWithValue }) => {
//   try {
//    const response = await advertsApi.deleteAdvert(id);
//    return response.data;
//   } catch (error) {
//    return rejectWithValue(error.message);
//   }
//  }
// );

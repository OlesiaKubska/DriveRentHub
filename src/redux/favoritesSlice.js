import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
 name: "favorites",
 initialState,
 reducers: {
  toggleFavorite: (state, action) => {
   const foundIndex = state.favorites.findIndex((id) => id === action.payload);
   if (foundIndex >= 0) {
    state.favorites.splice(foundIndex, 1);
   } else {
    state.favorites.push(action.payload);
   }
   localStorage.setItem("favorites", JSON.stringify(state.favorites));
  },
 },
});

// Експорт екшенів
export const { toggleFavorite } = favoritesSlice.actions;

// Експорт редюсера
export default favoritesSlice.reducer;

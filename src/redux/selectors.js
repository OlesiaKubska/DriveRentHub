import { createSelector } from "@reduxjs/toolkit";

const getAdvertsState = (state) => state.adverts;
const getFilters = (state) => state.filters;

export const getAllAdverts = (state) => getAdvertsState(state).adverts;
export const getAdvertsLoading = (state) => getAdvertsState(state).loading;
export const getAdvertsError = (state) => getAdvertsState(state).error;

// Селектор для модального вікна деталей оголошення
export const getAdvertDetails = (state, id) => {
 return getAllAdverts(state).find((advert) => advert.id === id);
};

export const getFavoritesAdverts = (state) => state.favorites.favorites;

export const getFilteredAdverts = createSelector(
 [getAllAdverts, getFilters],
 (adverts, filters) => {
  if (!Array.isArray(adverts)) {
   console.error("adverts is not an array:", adverts);
   return [];
  }

  return adverts.filter((advert) => {
   const priceOk =
    (!filters.price.min || advert.rentalPrice >= filters.price.min) &&
    (!filters.price.max || advert.rentalPrice <= filters.price.max);

   const mileageOk =
    (!filters.mileage.min || advert.mileage >= filters.mileage.min) &&
    (!filters.mileage.max || advert.mileage <= filters.mileage.max);

   return (
    (!filters.brand || advert.make === filters.brand) && priceOk && mileageOk
   );
  });
 }
);

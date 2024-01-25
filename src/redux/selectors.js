import { createSelector } from "@reduxjs/toolkit";

export const selectAdverts = (state) => state.adverts.adverts;
export const selectLoading = (state) => state.adverts.loading;
export const selectError = (state) => state.adverts.error;
export const selectPagination = (state) => state.adverts.pagination;

const getFilters = (state) => state.filters;

// Селектор для модального вікна деталей оголошення
export const getAdvertDetails = (state, id) => {
 return selectAdverts(state).find((advert) => advert.id === id);
};

export const getFavoritesAdverts = (state) => state.favorites.favorites;

const parsePrice = (priceString) => {
 const numberString = priceString.replace(/[^0-9.-]+/g, "");
 return numberString ? parseFloat(numberString) : null;
};

export const getFilteredAdverts = createSelector(
 [selectAdverts, getFilters],
 (adverts, filters) => {
  if (!Array.isArray(adverts)) {
   console.error("adverts is not an array:", adverts);
   return [];
  }

  return adverts.filter((advert) => {
   const advertPrice = parsePrice(advert.rentalPrice);

   const priceOk =
    filters.price === null ||
    filters.price === "" ||
    (advertPrice !== null && advertPrice >= filters.price);

   const mileageOk =
    (!filters.mileage.min || advert.mileage >= filters.mileage.min) &&
    (!filters.mileage.max || advert.mileage <= filters.mileage.max);

   return (
    (!filters.brand || advert.make === filters.brand) && priceOk && mileageOk
   );
  });
 }
);

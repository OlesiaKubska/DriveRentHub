// import { createSelector } from "@reduxjs/toolkit";

const getAdvertsState = (state) => state.adverts;

export const getAllAdverts = (state) => getAdvertsState(state).adverts;
export const getAdvertsLoading = (state) => getAdvertsState(state).loading;
export const getAdvertsError = (state) => getAdvertsState(state).error;

// Селектори для фільтрованих оголошень, якщо вони існують в стані
export const getFilteredAdverts = (state) => {
 // припустимо у нас є фільтр в стані
 const { filter, adverts } = getAdvertsState(state);
 // логіка фільтрації, наприклад, за маркою авто
 if (filter.brand) {
  return adverts.filter((advert) => advert.make === filter.brand);
 }
 return adverts;
};

// Селектор для пагінації, якщо потрібно
export const getAdvertsForPage = (state, page, advertsPerPage) => {
 const allAdverts = getAllAdverts(state);
 const startIndex = (page - 1) * advertsPerPage;
 const endIndex = startIndex + advertsPerPage;
 return allAdverts.slice(startIndex, endIndex);
};

// Селектор для модального вікна деталей оголошення
export const getAdvertDetails = (state, id) => {
 return getAllAdverts(state).find((advert) => advert.id === id);
};

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
 persistStore,
 persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import advertsReducer from "./advertsSlice";
import favoritesReducer from "./favoritesSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
 adverts: advertsReducer,
 favorites: favoritesReducer,
 filters: filtersReducer,
});

const persistConfig = {
 key: "root",
 storage,
 whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});

let persistor = persistStore(store);

export { store, persistor };

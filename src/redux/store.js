import { configureStore } from "@reduxjs/toolkit";
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

const persistConfig = {
 key: "root",
 storage,
};

const persistedReducer = persistReducer(persistConfig, advertsReducer);

const store = configureStore({
 reducer: {
  // тут ви використовуєте persistedReducer
  adverts: persistedReducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
  }),
});

let persistor = persistStore(store);

export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, wordsReducer);

export const persistor = persistStore(store);

export const store = configureStore(persistedReducer);

import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import { createStore } from "redux";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, wordsReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

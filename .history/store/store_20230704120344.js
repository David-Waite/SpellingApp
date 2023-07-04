import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import { createStore } from "redux";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, wordsReducer);

export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);

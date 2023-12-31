import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import { createStore } from "redux";

const persistConfig = {
  key: "root",
  storage: useAsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

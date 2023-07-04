import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});

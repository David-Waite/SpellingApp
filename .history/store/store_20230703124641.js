import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./words";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});

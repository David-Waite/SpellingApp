import { configureStore } from "@reduxjs/toolkit";
import words from "./words";
export const store = configureStore({
  reducer: {
    words: words,
  },
});

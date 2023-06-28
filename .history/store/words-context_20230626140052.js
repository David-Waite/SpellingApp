import { createContext } from "react";

export const WordsConext = createContext({
  wordLists: [],
  learningWords: [],
  completedWords: [],
  updateWord: ({ word, status }) => {},
});

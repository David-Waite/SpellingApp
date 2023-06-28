import { createContext } from "react";

export const WordsConext = createContext({
  wordLists: [],
  learningWords: [],
  completedWords: [],
  updateWord: ({ word, status }) => {},
});

function wordReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return;
    default:
      return state;
  }
}

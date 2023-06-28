import { createContext } from "react";

export const WordsConext = createContext({
  wordLists: [],
  learningWords: [],
  completedWords: [],
  updateWord: ({ word, status }) => {},
});

function wordReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return;
    default:
      return state;
  }
}

import { createContext, useReducer } from "react";

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

function WordContextProvider({ children }) {
  const [wordsState, dispatch] = useReducer(wordReducer, []);

  function updateWord(word, status) {
    dispatch({ type: "UPDATE", payload: { word: word, status: status } });
  }

  const value = {
    words: wordsState,
  };
}

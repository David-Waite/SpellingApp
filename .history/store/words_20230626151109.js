import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LearningList: {
    id: 0,
    title: "Your Learning List",
    description:
      "Your learning list consists of the words that are still learning. A word will be removed from the list when it has been gotten correct 5 times in a row over the span of at least 24hr. Words in this list can be accessed in this list or they will appear randomly when while working in there original list",
    words: {},
  },

  wordLists: [
    {
      id: 1,
      title: "New General Service List",
      description:
        "The NGSL 1.2 is a 2809-word list of the most important words of general English and daily life for second language learners. Though this is less than 10% of the vocabulary known by native speaker college graduates, it gives an average of 92% coverage of most texts of general English and even higher coverage in other situations (93% coverage for Harry Potter, 94% coverage for TOEIC exams, and 95% coverage for many TV shows such as Friends).",
      words: [
        {
          Word: "the",
          Definitons: "used to refer to something already mentioned",
          completed: null,
        },
        {
          Word: "be",
          Definitons:
            "To exist; to be alive; used to give information about someone or something",
          completed: null,
        },
      ],
    },
  ],
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    update: (state, action) => {
      console.log("hello");
      state.wordLists[action.payload.list].words[
        action.payload.word
      ].completed = action.payload.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = wordsSlice.actions;

export default wordsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  learningList: {
    id: "learningList",
    title: "Your Learning List",
    description:
      "Your learning list consists of the words that are still learning. A word will be removed from the list when it has been gotten correct 5 times in a row over the span of at least 24hr. Words in this list can be accessed in this list or they will appear randomly when while working in there original list",
    words: [],
  },
  completedList: [],
  wordLists: [
    {
      id: 0,
      title: "New General Service List",
      description:
        "The NGSL 1.2 is a 2809-word list of the most important words of general English and daily life for second language learners. Though this is less than 10% of the vocabulary known by native speaker college graduates, it gives an average of 92% coverage of most texts of general English and even higher coverage in other situations (93% coverage for Harry Potter, 94% coverage for TOEIC exams, and 95% coverage for many TV shows such as Friends).",
      words: [
        {
          word: "the",
          definiton: "used to refer to something already mentioned",
          completed: null,
        },
        {
          word: "be",
          definiton:
            "To exist; to be alive; used to give information about someone or something",
          completed: null,
        },
        {
          word: "and",
          definiton: "used to refer to two or more things",
          completed: null,
        },
        {
          word: "of",
          definiton: "belonging to or connected with something",
          completed: null,
        },
        {
          word: "to",
          definiton: "move towards; in the direction of",
          completed: null,
        },
      ],
    },
    {
      id: 1,
      title: "The New Academic Word List",
      description:
        "The NAWL 1.2 is a 957 word list of the most important words for general academic English and designed to work in conjunction with the NGSL 1.2 and is an update and replacement for Averil Coxhead’s excellent Academic Word List (Coxhead, 2000). The replacement of the original AWL was needed since (1) the number of words in the NGSL is different than the number of words in the original GSL by West (1953), (2) word units in the NGSL Project are modified lexeme sets (or flemmas) rather than the word family approach used by the AWL and (3) we hoped to attain higher coverage than the list it replaces.",

      words: [
        {
          word: "a",
          definiton: "Concerned with the abdomen or stomach",
          completed: null,
        },
        {
          word: "b",
          definiton: "to take in a liquid; soak up",
          completed: null,
        },
        {
          word: "c",
          definiton: "process of being absorbed (e.g. liquid, attention)",
          completed: null,
        },
        {
          word: "d",
          definiton: "to increase the speed or rate of something",
          completed: null,
        },
        {
          word: "e",
          definiton: "increase in the speed or rate of something",
          completed: null,
        },
      ],
    },
  ],
  count: 0,
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    update: (state, action) => {
      const learningWordIndexState = state.learningList.words.findIndex(
        (wordInList) => {
          return wordInList.word === action.payload.wordObject.word;
        }
      );

      const completedAction = action.payload.status;
      const wordListState = state.wordLists[action.payload.listId];

      if (action.payload.isLearningList) {
        if (completedAction) {
          if (learningWordIndexState !== -1) {
            const learningWordObjectState =
              state.learningList.words[learningWordIndexState];
            learningWordObjectState.ttd--;

            if (learningWordObjectState.ttd === 1) {
              state.learningList.words.splice(learningWordIndexState, 1);
              state.completedList.push({
                word: learningWordObjectState.word,
                definiton: learningWordObjectState.definiton,
                completed: true,
              });
            }
            return;
          }
        } else {
          wordObjectState.completed = false;
          if (learningWordIndexState !== -1) {
            state.learningList.words[learningWordIndexState].ttd = 3;
          }
        }
        return;
      }

      const wordIndexState = wordListState.words.findIndex((wordInList) => {
        return wordInList.word === action.payload.wordObject.word;
      });

      const wordObjectState = wordListState.words[wordIndexState];

      if (completedAction) {
        if (learningWordIndexState !== -1) {
          const learningWordObjectState =
            state.learningList.words[learningWordIndexState];
          learningWordObjectState.ttd--;

          if (learningWordObjectState.ttd === 0) {
            state.learningList.words.splice(learningWordIndexState, 1);
            state.completedList.push({
              word: learningWordObjectState.word,
              definiton: learningWordObjectState.definiton,
              completed: true,
            });
            wordObjectState.completed = true;
          }
          return;
        }
        state.completedList.push(wordObjectState);
        wordObjectState.completed = true;
      } else {
        wordObjectState.completed = false;
        if (learningWordIndexState !== -1) {
          state.learningList.words[learningWordIndexState].ttd = 3;
        } else {
          let learningWord = { ...wordObjectState, ttd: 3 };
          state.learningList.words.push(learningWord);
        }
      }
    },
    removeFromLearning: (state, action) => {
      const word = action.payload.word;
      const index = learningList.words.findIndex(
        (wordInList) => wordInList.Word === word
      );

      state.learningList.words.splice(index, 1);
      state.completedList.push(word);
    },
  },
});

export const update = wordsSlice.actions.update;

export default wordsSlice.reducer;

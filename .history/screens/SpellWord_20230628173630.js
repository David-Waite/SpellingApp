// trying to see if updating the state with redux will automatcily change to next word

import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import { KeyboardAvoidingView } from "react-native";
import WordPopUpBtn from "../components/ui/SpellWord/WordPopUpBtn";
import { useState } from "react";
import SpellButtons from "../components/ui/SpellWord/SpellButtons";

import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/words";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import oneInThree from "../utils/oneInThree";

function SpellWord({ route }) {
  const [enteredWord, setEnteredWord] = useState();
  const [wordCompleted, setWordCompleted] = useState(null);
  const [showWord, setShowWord] = useState(null);
  const [lastWord, setLastWord] = useState(false);

  const dispatch = useDispatch();

  let wordList = {};

  if (route.params.wordList.id === "learningList") {
    wordList = useSelector((state) => state.words.learningList);
  } else {
    wordList = useSelector(
      (state) => state.words.wordLists[route.params.wordList.id]
    );
  }

  const wordListLength = wordList.words.length;

  const [wordObject, setwordObject] = useState(() => {
    let word = null;
    let index = 0;

    for (let i = 0; i < wordListLength; i++) {
      if (wordList.words[i] === null) {
        setLastWord(true);

        return {
          wordObject: wordList.words[0],
          index: 0,
        };
      }
      if (wordList.words[i].completed === null) {
        index = i;
        word = wordList.words[i];
        break;
      }
    }

    return {
      wordObject: word,
      index: index,
    };
  });

  function nextWord() {
    setShowWord(false);
    setEnteredWord("");
    if (oneInThree()) {
      console.log("random");
    }
    dispatch(
      update({
        list: route.params.wordList.id,
        word: wordObject.index,
        status: wordCompleted,
      })
    );

    if (wordObject.index + 1 === wordListLength) {
      setLastWord(true);
      return;
    }
    setWordCompleted(null);

    setwordObject((prev) => {
      const index = prev.index + 1;
      return {
        wordObject: wordList.words[index],
        index: index,
      };
    });
  }

  function inputChangeHandler(enteredValue) {
    setEnteredWord(enteredValue);
  }

  function buttonPressHandler() {
    if (!wordCompleted && !showWord) {
      setShowWord(true);
      setEnteredWord(capitalizeFirstLetter(word));
      return;
    }
    nextWord();
  }

  function submitSpellingForm() {
    if (!enteredWord) {
      return;
    }
    if (wordCompleted === null) {
      if (word.toLowerCase() !== enteredWord.toLowerCase()) {
        //wrong
        setWordCompleted(false);
      } else {
        //right
        setWordCompleted(true);
      }
    }
  }

  if (lastWord || wordObject.wordObject === null) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Looks like you've finished this list</Text>
        <Text>Great job!</Text>
      </View>
    );
  }

  const word = wordObject.wordObject.word;
  const wordDefintion = wordObject.wordObject.definiton;

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={90}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{wordList.title}</Text>
        <SpellingForm
          word={word}
          onSubmit={submitSpellingForm}
          wordCorrect={wordCompleted}
          showWord={showWord}
          onChange={inputChangeHandler}
          value={enteredWord}
        />
        <SpellButtons definiton={wordDefintion} word={word} />
      </View>
      {wordCompleted !== null && (
        <WordPopUpBtn
          correct={wordCompleted}
          next={false}
          onPress={buttonPressHandler}
          showingWord={showWord}
        />
      )}
    </KeyboardAvoidingView>
  );
}

export default SpellWord;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    justifyContent: "space-between",
  },
  KeyboardAvoidingView: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.background,
    paddingBottom: 50,
  },
});

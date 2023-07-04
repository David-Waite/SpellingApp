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
  const dispatch = useDispatch();
  const [enteredWord, setEnteredWord] = useState();
  const [wordCompleted, setWordCompleted] = useState(null);
  const [showWord, setShowWord] = useState(false);
  const [completedList, setCompletedList] = useState(false);
  const isLearningList = route.params.wordList.id === "learningList";

  const wordList = useSelector((state) =>
    isLearningList
      ? state.learningList
      : state.wordLists[route.params.wordList.id]
  );

  const [index, setIndex] = useState(() => {
    for (let i = 0; i < wordList.words.length; i++) {
      if (wordList.words[i].completed === null) {
        return i;
      }
    }

    return wordList.words.length;
  });

  console.log(getRandomWrongWord());
  const [wordObject, setwordObject] = useState(() => {
    if (index === wordList.words.length) {
      if (getRandomWrongWord()) {
        return getRandomWrongWord();
      } else {
        setCompletedList(true);
        return wordList.words[0];
      }
    }
    return wordList.words[index];
  });

  function getWrongWords() {
    let wrongWords = [];

    for (let i = 0; i < wordList.words.length; i++) {
      if (wordList.words[i].completed === false) {
        wrongWords.push(wordList.words[i]);
      }
    }
    return wrongWords;
  }

  function getRandomWrongWord() {
    const wrongWords = getWrongWords();
    const wrongWordsLength = wrongWords.length;
    if (wrongWordsLength === 0) {
      return false;
    }
    const randomIndex = Math.floor(Math.random() * wrongWordsLength);
    return wrongWords[randomIndex];
  }

  function inputChangeHandler(enteredValue) {
    setEnteredWord(enteredValue);
  }

  function buttonPressHandler() {
    if (!wordCompleted && !showWord) {
      setShowWord(true);
      setEnteredWord(capitalizeFirstLetter(wordObject.word));
      return;
    }
    nextWord();
  }

  function submitSpellingForm() {
    if (!enteredWord) {
      return;
    }
    if (wordCompleted === null) {
      if (wordObject.word.toLowerCase() !== enteredWord.toLowerCase()) {
        dispatch(
          update({
            listId: wordList.id,
            wordObject: wordObject,
            status: false,
          })
        );
        setWordCompleted(false);
      } else {
        dispatch(
          update({
            listId: wordList.id,
            wordObject: wordObject,
            status: true,
          })
        );

        setWordCompleted(true);
      }
    }
  }

  function nextWord() {
    setEnteredWord("");
    setShowWord(false);
    setWordCompleted(null);
    const isWrongWords = !!getRandomWrongWord();
    if (isWrongWords) {
      if (oneInThree()) {
        setwordObject(getRandomWrongWord());
        return;
      }
    }

    if (index + 1 >= wordList.words.length) {
      if (isWrongWords) {
        setwordObject(getRandomWrongWord());
        return;
      }
      setwordObject(wordList.words[0]);
      setCompletedList(true);
      return;
    }

    setIndex((prev) => prev + 1);
    setwordObject(wordList.words[index + 1]);
  }

  if (completedList) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Looks like you've finished this list</Text>
        <Text>Great job!</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={90}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{wordList.title}</Text>
        <SpellingForm
          word={wordObject.word}
          onSubmit={submitSpellingForm}
          wordCorrect={wordCompleted}
          showWord={showWord}
          onChange={inputChangeHandler}
          value={enteredWord}
        />
        <SpellButtons definiton={wordObject.definiton} word={wordObject.word} />
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

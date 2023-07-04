import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import { KeyboardAvoidingView } from "react-native";
import WordPopUpBtn from "../components/ui/SpellWord/WordPopUpBtn";
import { useEffect, useState } from "react";
import SpellButtons from "../components/ui/SpellWord/SpellButtons";

import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/words";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { Button } from "react-native";

function SpellWord({ route }) {
  const [lastWord, setLastWord] = useState(false);
  const [wordList, setWordList] = useState(
    useSelector((state) => state.words.wordLists[route.params.wordList.id])
  );

  const [index, setIndex] = useState(() => {
    for (let i = 0; i < wordList.words.length; i++) {
      if (wordList.words[i].completed === null) {
        return i;
      }
    }
  });

  function getWrongWords() {
    let returnWrongWords = [];

    for (let i = 0; i < wordListLength; i++) {
      if (wordList.words[i].completed === false) {
        returnWrongWords.push(wordList.words[i]);
      }
    }
    return returnWrongWords;
  }

  function getRandomWrongWord() {
    const wrongWords = getWrongWords();
    const wordWordsLength = wrongWords.length;
    if (wordWordsLength === 0) {
      return false;
    }
    const randomIndex = Math.floor(Math.random() * wordWordsLength);
    return wrongWords[randomIndex];
  }

  console.log(getRandomWrongWord());

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={90}
    ></KeyboardAvoidingView>
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

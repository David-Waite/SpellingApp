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
  const [wordList, setWordList] = useState(
    useSelector((state) => state.words.wordLists[route.params.wordList.id])
  );

  const [index, setIndex] = useState(() => {
    let index = 0;

    for (let i = 0; i < wordList.words.length; i++) {
      if (wordList.words[i] === null) {
        //check for completed list
      }
      if (wordList.words[i].completed === null) {
        return index;
      }
    }
  });

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

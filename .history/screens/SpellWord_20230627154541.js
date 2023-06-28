import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import { KeyboardAvoidingView } from "react-native";
import WordPopUpBtn from "../components/ui/SpellWord/WordPopUpBtn";
import { useState } from "react";
import SpellButtons from "../components/ui/SpellWord/SpellButtons";

import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/words";

function SpellWord({ route }) {
  const [enteredWord, setEnteredWord] = useState();
  const [wordCompleted, setWordCompleted] = useState(null);
  const [showWord, setShowWord] = useState(false);

  function inputChangeHandler(enteredValue) {
    setEnteredWord(enteredValue);
  }

  const currentWordObject = useSelector(
    (state) => state.words.wordLists[0].words[0]
  );
  const dispatch = useDispatch();

  function buttonPressHandler() {
    if (!wordCompleted) {
      setEnteredWord(
        currentWord.charAt(0).toUpperCase() + currentWord.slice(1)
      );
    }
    setShowWord(true);
  }

  function submitSpellingForm() {
    console.log(currentWordObject.word);
    if (currentWord !== enteredWord) {
      console.log("wrong");
    }
    // const enteredValue = formData.nativeEvent.text;
    //if (enteredValue.toLowerCase() === currentWord.toLowerCase()) {
    // setWordCompleted(true);
    // dispatch(
    //  update({
    //    list: 0,
    //    word: 0,
    //    status: true,
    //  })
    // );
    //} else {
    // setWordCompleted(false);
    // dispatch(
    //   update({
    //    list: 0,
    //     word: 0,
    //    status: false,
    //  })
    // );
    // }
  }

  const wordlist = route.params.wordList;
  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={90}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{wordlist.title}</Text>
        <SpellingForm
          word={currentWord}
          onSubmit={submitSpellingForm}
          wordCorrect={wordCompleted}
          showWord={showWord}
          onChange={inputChangeHandler}
          value={enteredWord}
        />
        <SpellButtons
          definiton={currentWord.definiton}
          word={currentWord.word}
        />
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
});

import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import { KeyboardAvoidingView } from "react-native";
import WordPopUpBtn from "../components/ui/SpellWord/WordPopUpBtn";
import { useState } from "react";
import SpellButtons from "../components/ui/SpellWord/SpellButtons";

import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";
const DUMMYWORD = DUMMYDATA[0].words[0].Word;
const DUMMYWORDDEF = DUMMYDATA[0].words[0].Definitons;

function SpellWord({ route }) {
  const [enteredWord, setEnteredWord] = useState();
  const [wordCompleted, setWordCompleted] = useState(null);
  const [showWord, setShowWord] = useState(false);

  function inputChangeHandler(enteredValue) {
    setEnteredWord(enteredValue);
  }

  function buttonPressHandler() {
    if (!wordCompleted) {
      setEnteredWord(DUMMYWORD.charAt(0).toUpperCase() + DUMMYWORD.slice(1));
    }
    setShowWord(true);
  }

  async function submitSpellingForm(formData) {
    const enteredValue = formData.nativeEvent.text;
    if (enteredValue.toLowerCase() === DUMMYWORD.toLowerCase()) {
      setWordCompleted(true);
    } else {
      setWordCompleted(false);
    }
  }

  const wordPopUpBtnElement = (
    <WordPopUpBtn
      correct={wordCompleted}
      next={false}
      onPress={buttonPressHandler}
      showingWord={showWord}
    />
  );

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
          word={DUMMYWORD}
          onSubmit={submitSpellingForm}
          wordCorrect={wordCompleted}
          showWord={showWord}
          onChange={inputChangeHandler}
          value={enteredWord}
        />
        <SpellButtons definiton={DUMMYWORDDEF} />
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

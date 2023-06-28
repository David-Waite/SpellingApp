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

function SpellWord({ route }) {
  const [enteredWord, setEnteredWord] = useState();
  const [wordCompleted, setWordCompleted] = useState(null);
  const [showWord, setShowWord] = useState(false);

  const wordList = useSelector((state) => state.words.wordLists[0]);

  const currentWordObject = wordList.words[0];

  console.log(currentWordObject.word);

  const dispatch = useDispatch();

  function inputChangeHandler(enteredValue) {
    setEnteredWord(enteredValue);
  }

  function buttonPressHandler() {
    setShowWord(true);
    setEnteredWord(capitalizeFirstLetter(currentWordObject.word));
  }

  function submitSpellingForm() {
    if (currentWordObject.word.toLowerCase() !== enteredWord.toLowerCase()) {
      //wrong
      setWordCompleted(false);
    } else {
      //right
      setWordCompleted(true);
      // navigation.navigate("SpellWord", {
      //   wordList: wordList,
      // });
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

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={90}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{wordList.title}</Text>
        <SpellingForm
          word={currentWordObject.word}
          onSubmit={submitSpellingForm}
          wordCorrect={wordCompleted}
          showWord={showWord}
          onChange={inputChangeHandler}
          value={enteredWord}
        />
        <SpellButtons
          definiton={currentWordObject.definiton}
          word={currentWordObject.word}
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

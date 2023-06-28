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

function SpellWord({ route }) {
  const [enteredWord, setEnteredWord] = useState();
  const [wordCompleted, setWordCompleted] = useState(null);
  const [showWord, setShowWord] = useState(null);

  const dispatch = useDispatch();

  const wordList = useSelector(
    (state) => state.words.wordLists[route.params.wordList.id]
  );

  const [wordObject, setwordObject] = useState(() => {
    let word2 = null;
    let index = 0;
    for (let i = 0; i < wordList.words.length; i++) {
      if (wordList.words[i] === undefined) {
        return {
          wordObject: null,
          index: null,
        };
      }
      if (wordList.words[i].completed === null) {
        index = i;
        word2 = wordList.words[i];
        break;
      }
    }
    return {
      wordObject: word2,
      index: index,
    };
  });

  if (wordObject.wordObject === null) {
    return (
      <View>
        <Text>Nothing</Text>
      </View>
    );
  }

  function nextWord() {
    setShowWord(false);
    setEnteredWord("");

    dispatch(
      update({
        list: route.params.wordList.id,
        word: wordObject.index,
        status: wordCompleted,
      })
    );
    setWordCompleted(null);

    setwordObject((prev) => {
      const index = prev.index + 1;
      return {
        wordObject: wordList.words[index],
        index: index,
      };
    });
  }

  const word2 = wordObject.wordObject.word;
  const wordDefintion = wordObject.wordObject.definiton;

  function inputChangeHandler(enteredValue) {
    setEnteredWord(enteredValue);
  }

  function buttonPressHandler() {
    if (!wordCompleted && !showWord) {
      setShowWord(true);
      setEnteredWord(capitalizeFirstLetter(word2));
      return;
    }
    nextWord();
  }

  function submitSpellingForm() {
    if (!enteredWord) {
      return;
    }
    if (wordCompleted === null) {
      if (word2.toLowerCase() !== enteredWord.toLowerCase()) {
        //wrong
        setWordCompleted(false);
      } else {
        //right
        setWordCompleted(true);
      }
    }
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
          word={word2}
          onSubmit={submitSpellingForm}
          wordCorrect={wordCompleted}
          showWord={showWord}
          onChange={inputChangeHandler}
          value={enteredWord}
        />
        <SpellButtons definiton={wordDefintion} word={word2} />
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

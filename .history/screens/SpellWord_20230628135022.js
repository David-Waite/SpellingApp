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
  const [lastWord, setLastWord] = useState(false);

  const dispatch = useDispatch();

  const wordList = useSelector(
    (state) => state.words.wordLists[route.params.wordList.id]
  );
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

  if (lastWord === true) {
    return (
      <View>
        <Text>Nothing</Text>
      </View>
    );
  }

  function nextWord() {
    // if (wordObject.index + 1 === wordListLength) {
    //   setLastWord(true);
    //   return;
    // }
    setShowWord(false);
    setEnteredWord("");

    dispatch(
      update({
        list: route.params.wordList.id,
        word2: wordObject.index,
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
  if (wordObject.wordObject === null) {
    return <Text>noting</Text>;
  }

  const word = wordObject.wordObject.word;
  const wordDefintion = wordObject.wordObject.definiton;

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
});
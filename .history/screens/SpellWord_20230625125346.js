import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import IconButton from "../components/ui/IconButton";

import { KeyboardAvoidingView } from "react-native";
import ShowWordBtn from "../components/ui/SpellWord/ShowWordBtn";
import { useState } from "react";

const DUMMYWORD = "happy";

function SpellWord({ route }) {
  const [enteredWord, setEnnteredWord] = useState("");
  function enteredWordHandler({ enteredValue }) {
    setEnnteredWord(enteredValue);
  }

  const currentWord = DUMMYWORD;
  console.log(enteredWord);
  const wordlist = route.params.wordList;
  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={90}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{wordlist.title}</Text>
        <TextInput
          onChangeText={enteredWordHandler}
          autoCompleteType="off"
          autoCorrect={false}
          spellCheck={false}
          keyboardType="url"
          style={styles.textInput}
          maxLength={currentWord.length}
          autoFocus={true}
        />

        <View style={styles.buttonContainer}>
          <IconButton
            icon="volume-high-outline"
            size={40}
            color={"grey"}
            onPress={() => {}}
          />
          <IconButton
            icon="book-outline"
            size={40}
            color={"grey"}
            onPress={() => {}}
          />
        </View>
      </View>
      <ShowWordBtn />
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
  buttonContainer: {
    flexDirection: "row",

    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

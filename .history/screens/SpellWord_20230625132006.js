import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import { KeyboardAvoidingView } from "react-native";
import ShowWordBtn from "../components/ui/SpellWord/ShowWordBtn";
import { useState } from "react";
import SpellButtons from "../components/ui/SpellWord/SpellButtons";

const DUMMYWORD = "happy";

function SpellWord({ route }) {
  const [wordCompleted, setWordCompleted] = useState(null);

  function submitSpellingForm(formData) {
    const enteredValue = formData.nativeEvent.text;
    if (enteredValue.toLowerCase() === DUMMYWORD.toLowerCase()) {
      setWordCompleted(true);
    } else {
      setWordCompleted(false);
    }
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
        <SpellingForm word={DUMMYWORD} onSubmit={submitSpellingForm} />
        <SpellButtons />
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
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import IconButton from "../components/ui/IconButton";

import { KeyboardAvoidingView } from "react-native";
import ShowWordBtn from "../components/ui/SpellWord/ShowWordBtn";

const DUMMYWORD = "ashamed";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={90}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{wordlist.title}</Text>
        <SpellingForm word={"happy"} />

        <View style={styles.buttonContainer}>
          <IconButton
            icon="book-outline"
            size={40}
            color={"grey"}
            onPress={() => {}}
          />
          <IconButton
            icon="volume-high-outline"
            size={40}
            color={"grey"}
            onPress={() => {}}
          />
          <IconButton
            icon="chatbubbles-outline"
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
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

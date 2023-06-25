import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import IconButton from "../components/ui/IconButton";
import useKeyboardHeight from "react-native-use-keyboard-height";
import { KeyboardAvoidingView } from "react-native";

function SpellWord({ route }) {
  const keyboardHeight = useKeyboardHeight();
  const wordlist = route.params.wordList;

  return (
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
  );
}

export default SpellWord;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalStyles.colors.background,
    justifyContent: "space-between",
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    padding: 20,
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

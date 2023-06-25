import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import IconButton from "../components/ui/IconButton";
import { KeyboardAvoidingView } from "react-native";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>{wordlist.title}</Text>
        <View>
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
      </View>
    </KeyboardAvoidingView>
  );
}

export default SpellWord;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

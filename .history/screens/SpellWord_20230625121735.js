import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";
import IconButton from "../components/ui/IconButton";

import { KeyboardAvoidingView } from "react-native";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <View styles={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.header}>{wordlist.title}</Text>
          <SpellingForm word={"happy"} />
          <View style={styles.btnContainer}>
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
          <View style={{ flex: 1 }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SpellWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SpellingForm from "../components/ui/SpellWord/SpellingForm";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{wordlist.title}</Text>
      <SpellingForm />
    </View>
  );
}

export default SpellWord;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

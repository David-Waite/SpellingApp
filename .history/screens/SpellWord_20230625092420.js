import { StyleSheet, Text } from "react-native";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return <Text>{wordlist.title}</Text>;
}

export default SpellWord;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

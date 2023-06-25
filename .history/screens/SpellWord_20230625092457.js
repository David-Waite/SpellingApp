import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return (
    <View>
      <Text style={styles.title}>{wordlist.title}</Text>
    </View>
  );
}

export default SpellWord;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

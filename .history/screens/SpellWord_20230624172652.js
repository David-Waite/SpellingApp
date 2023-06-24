import { Text } from "react-native";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return <Text>{wordlist.title}</Text>;
}

export default SpellWord;

import { Text } from "react-native";

function SpellWord({ route }) {
  const wordlist = route.params.wordList;
  return <Text>Spelling Words</Text>;
}

export default SpellWord;

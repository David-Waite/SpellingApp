import { Text } from "react-native";

function WordListOverview({ route, navigation }) {
  return <Text onPress={() => navigation.navigate("SpellWord")}>Continue</Text>;
}

export default WordListOverview;

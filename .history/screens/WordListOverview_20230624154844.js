import { Text } from "react-native";

function WordListOverview({ route, navigation }) {
  console.log(route.prams);
  return <Text onPress={() => navigation.navigate("SpellWord")}>Continue</Text>;
}

export default WordListOverview;

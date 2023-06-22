import { Text } from "react-native";

function WordListOverview({ navigation }) {
  return (
    <Card>
      <Text onPress={() => navigation.navigate("SpellWord")}>Continue</Text>
    </Card>
  );
}

export default WordListOverview;

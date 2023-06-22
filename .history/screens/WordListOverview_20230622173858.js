import { Text } from "react-native";

function WordListOverview() {
  return (
    <Card>
      <Text onPress={() => navigation.navigate("WordsLearnt")}>WordsKnown</Text>
    </Card>
  );
}

export default WordListOverview;

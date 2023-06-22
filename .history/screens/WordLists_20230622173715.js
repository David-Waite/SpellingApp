import { Text } from "react-native";

function WordLists() {
  return (
    <Card>
      <Text onPress={() => navigation.navigate("WordsLearnt")}>WordsKnown</Text>
    </Card>
  );
}

export default WordLists;

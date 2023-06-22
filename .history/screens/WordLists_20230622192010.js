import { Text } from "react-native";

function WordLists({ navigation }) {
  return (
    <Text onPress={() => navigation.navigate("WordListOverview")}>
      Example list
    </Text>
  );
}

export default WordLists;

import { Text } from "react-native";
import Card from "../components/ui/Card";
function WordLists() {
  return (
    <Card>
      <Text onPress={() => navigation.navigate("WordsLearnt")}>
        Example list
      </Text>
    </Card>
  );
}

export default WordLists;

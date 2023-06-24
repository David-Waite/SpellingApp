import { Text } from "react-native";
import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";

function WordListOverview({ route, navigation }) {
  const listId = route.params.listId;
  const selectedList = DUMMYDATA.find((list) => list.id === listId);
  console.log(selectedList);
  return <Text onPress={() => navigation.navigate("SpellWord")}>Continue</Text>;
}

export default WordListOverview;

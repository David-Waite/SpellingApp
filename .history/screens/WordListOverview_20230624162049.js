import { Text, View } from "react-native";
import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";
import Card from "../components/ui/Card";
import { useLayoutEffect } from "react";

function WordListOverview({ route, navigation }) {
  const listId = route.params.listId;
  const selectedList = DUMMYDATA.find((list) => list.id === listId);

  return (
    <View>
      <Text>{selectedList.title}</Text>
      <Card>
        <Text>{selectedList.description}</Text>
      </Card>
      <Text onPress={() => navigation.navigate("SpellWord")}>Continue</Text>
    </View>
  );
}

export default WordListOverview;

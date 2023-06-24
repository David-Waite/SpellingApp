import { Text, View } from "react-native";
import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";
import Card from "../components/ui/Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function WordListOverview({ route, navigation }) {
  const listId = route.params.listId;
  const selectedList = DUMMYDATA.find((list) => list.id === listId);

  return (
    <View style={styles.container}>
      <Text>{selectedList.title}</Text>
      <Card>
        <Text>{selectedList.description}</Text>
      </Card>
      <Text onPress={() => navigation.navigate("SpellWord")}>Continue</Text>
    </View>
  );
}

export default WordListOverview;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    gap: 15,
  },
  title: {
    fontSize: 16,
    color: GlobalStyles.colors.accent500,
  },
});

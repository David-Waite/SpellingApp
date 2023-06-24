import { Text, View } from "react-native";
import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";
import Card from "../components/ui/Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import StatBtn from "../components/ui/Home/StatBtn";

function WordListOverview({ route, navigation }) {
  const listId = route.params.listId;
  const selectedList = DUMMYDATA.find((list) => list.id === listId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedList.title}</Text>
      <Card>
        <Text>{selectedList.description}</Text>
      </Card>
      <Text>Your breakdown</Text>
      <View style={styles.btnContainer}>
        <View style={styles.row}>
          <StatBtn stat={0} text="learning" extraStyles={styles.statBtn} />
          <StatBtn stat={0} text={"completed"} />
        </View>
        <View>
          <StatBtn stat={0} text={"unknown"} />
        </View>
      </View>

      <Text onPress={() => navigation.navigate("SpellWord")}>Continue</Text>
    </View>
  );
}

export default WordListOverview;

const styles = StyleSheet.create({
  container: {
    padding: 20,

    gap: 15,
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
  btnContainer: {
    gap: 15,
  },
  statBtn: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

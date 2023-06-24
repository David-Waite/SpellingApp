import { Text, View } from "react-native";
import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";
import Card from "../components/ui/Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import StatBtn from "../components/ui/StatBtn";
import ContinueBtn from "../components/ui/WordListOverview/ContinueBtn";

function WordListOverview({ route, navigation }) {
  const listId = route.params.listId;
  const selectedList = DUMMYDATA.find((list) => list.id === listId);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{selectedList.title}</Text>
        <Card>
          <Text>{selectedList.description}</Text>
        </Card>
        <Text style={styles.breakdown}>Your breakdown</Text>
        <View style={styles.btnContainer}>
          <View style={styles.row}>
            <StatBtn stat={0} text="learning" extraStyles={styles.statBtn} />
            <StatBtn stat={0} text={"completed"} extraStyles={styles.statBtn} />
          </View>
          <View>
            <StatBtn stat={0} text={"unknown"} extraStyles={styles.statBtn} />
          </View>
        </View>
      </View>

      <ContinueBtn />
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
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
  btnContainer: {
    gap: 15,
  },
  breakdown: {
    color: GlobalStyles.colors.accent500,
    fontWeight: 600,
  },
  statBtn: {
    backgroundColor: GlobalStyles.colors.primary500,
    color: GlobalStyles.colors.primary50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

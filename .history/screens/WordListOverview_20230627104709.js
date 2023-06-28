import { Text, View } from "react-native";
import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";
import Card from "../components/ui/Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import StatBtn from "../components/ui/StatBtn";
import ContinueBtn from "../components/ui/WordListOverview/ContinueBtn";
import { useSelector } from "react-redux";

function WordListOverview({ route }) {
  const listId = route.params.listId;

  const isLearningList = route.params.listId === 0 ? true : false;
  let selectedList = {};
  if (isLearningList) {
    selectedList = useSelector((state) => state.words.learningList);
  } else {
    selectedList = DUMMYDATA.find((list) => list.id === listId);
  }

  function calucateWordsLearnt() {
    return 0;
  }

  const wordsLearnt = calucateWordsLearnt();
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
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
          {!isLearningList && (
            <View>
              <StatBtn stat={0} text={"unknown"} extraStyles={styles.statBtn} />
            </View>
          )}
        </View>
      </View>
      <ContinueBtn wordList={selectedList} />
    </View>
  );
}

export default WordListOverview;

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20,

    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
    justifyContent: "space-between",
  },
  innerContainer: { gap: 15 },
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

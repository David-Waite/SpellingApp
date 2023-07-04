import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../constants/styles";
import { FlatList } from "react-native";

function WordsLearnt() {
  const dispatch = useDispatch();
  const wordsLearnt = useSelector((state) => state.completedList);

  console.log("yeet");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Words learnt list</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <WordItem title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default WordsLearnt;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

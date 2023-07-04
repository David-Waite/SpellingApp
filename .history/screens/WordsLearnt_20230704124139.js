import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../constants/styles";
import { FlatList } from "react-native";
import WordLearntCard from "../components/ui/WordsLearnt/wordsLearntCard";

function WordsLearnt() {
  const dispatch = useDispatch();
  const wordsLearnt = useSelector((state) => state.completedList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Words learnt list</Text>
      <FlatList
        data={wordsLearnt}
        renderItem={({ word }) => <WordLearntCard word={word} />}
        keyExtractor={(item) => item.word}
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

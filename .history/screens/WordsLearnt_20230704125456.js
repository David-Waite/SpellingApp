import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../constants/styles";
import { FlatList } from "react-native";
import WordLearntItem from "../components/ui/WordsLearnt/WordsLearntItem";

function WordsLearnt() {
  const wordsLearnt = useSelector((state) => state.completedList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Words learnt list</Text>
      <FlatList
        data={wordsLearnt}
        renderItem={({ item }) => <WordLearntItem word={item.word} />}
        keyExtractor={(item) => item.word}
      />
    </View>
  );
}

export default WordsLearnt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  title: {
    padding: 20,
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

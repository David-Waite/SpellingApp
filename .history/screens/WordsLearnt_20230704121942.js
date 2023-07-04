import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
function WordsLearnt() {
  const [wordLearnt] = useSelector(
    (state) => state.wordLists[route.params.wordList.id]
  );
  const wordsLearntElement = wordLearnt.map((word) => (
    <View>
      <Text>{word.word}</Text>
    </View>
  ));
  return <Text>Words learnt list</Text>;
}

export default WordsLearnt;

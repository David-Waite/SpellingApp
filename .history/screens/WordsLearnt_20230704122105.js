import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
function WordsLearnt() {
  const [wordLearnt] = useSelector(
    (state) => state.wordLists[route.params.wordList.id]
  );
  const wordsLearntElement = wordLearnt.map((word) => {
    return (
      <View>
        <Text>{word.word}</Text>
      </View>
    );
  });

  return (
    <View>
      <Text>Words larnt list</Text>
      {wordsLearntElement}
    </View>
  );
}

export default WordsLearnt;

import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
function WordsLearnt() {
  const [wordLearnt] = useSelector(
    (state) => state.wordLists[route.params.wordList.id]
  );
  return <Text>Words learnt list</Text>;
}

export default WordsLearnt;

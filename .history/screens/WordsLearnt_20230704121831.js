import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
function WordsLearnt() {
  return <Text>Words learnt list</Text>;

  const wordList = useSelector(
    (state) => state.wordLists[route.params.wordList.id]
  );
}

export default WordsLearnt;

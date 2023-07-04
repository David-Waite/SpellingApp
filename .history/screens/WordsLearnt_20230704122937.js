import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

function WordsLearnt() {
  const dispatch = useDispatch();
  const wordsLearnt = useSelector((state) => state.completedList);
  const wordsLearntElement = wordsLearnt.map((word) => {
    return (
      <View>
        <Text>{word.word}</Text>
      </View>
    );
  });

  console.log("yeet");
  return (
    <View>
      <Text>Words learnt list</Text>
      {wordsLearntElement}
    </View>
  );
}

export default WordsLearnt;

import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

function WordsLearnt() {
  const dispatch = useDispatch();
  const wordList = useSelector((state) => state.wordLists[1]);
  // const wordsLearntElement = wordLearnt.map((word) => {
  //   return (
  //     <View>
  //       <Text>{word.word}</Text>
  //     </View>
  //   );
  // });

  console.log(useSelector((state) => state.wordLists[1]));
  console.log("yeet");
  return (
    <View>
      <Text>Words learnt list</Text>
    </View>
  );
}

export default WordsLearnt;

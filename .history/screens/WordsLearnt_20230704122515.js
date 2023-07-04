import { Text, View } from "react-native";
import { useSelector } from "react-redux";
function WordsLearnt() {
  const wordList = useSelector((state) => state.wordLists[1]);
  // const wordsLearntElement = wordLearnt.map((word) => {
  //   return (
  //     <View>
  //       <Text>{word.word}</Text>
  //     </View>
  //   );
  // });

  console.log(wordsList);
  console.log("yeet");
  return (
    <View>
      <Text>Words learnt list</Text>
    </View>
  );
}

export default WordsLearnt;

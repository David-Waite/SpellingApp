import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
function WordsLearnt() {
  const [wordLearnt] = useSelector((state) => state);
  // const wordsLearntElement = wordLearnt.map((word) => {
  //   return (
  //     <View>
  //       <Text>{word.word}</Text>
  //     </View>
  //   );
  // });

  console.log(wordsLearnt);
  console.log("yeet");
  return (
    <View>
      <Text>Words learnt list</Text>
    </View>
  );
}

export default WordsLearnt;

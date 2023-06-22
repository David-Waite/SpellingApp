import { Text } from "react-native";
import Card from "./Card";
function WordsLearntCard() {
  return (
    <Card>
      <Text
        style={style.WordsKnownText}
        onPress={() => navigation.navigate("WordsLearnt")}
      >
        Words known
      </Text>
    </Card>
  );
}

export default WordsLearntCard;

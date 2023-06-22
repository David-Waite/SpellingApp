import { Text, StyleSheet } from "react-native";
import Card from "./Card";
import { GlobalStyles } from "../../constants/styles";

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

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
  },
  WordsKnownText: {
    textAlign: "center",
    fontWeight: "semibold",
  },
});

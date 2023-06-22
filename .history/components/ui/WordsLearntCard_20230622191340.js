import { Text, StyleSheet } from "react-native";
import Card from "./Card";
import { GlobalStyles } from "../../constants/styles";
import { Pressable } from "react-native";

function WordsLearntCard({ navigation }) {
  return (
    <Card>
      <Pressable onPress={() => navigation.navigate("WordsLearnt")}>
        <Text style={style.WordsKnownText}>Words known</Text>
      </Pressable>
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

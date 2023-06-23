import { Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../../constants/styles";
import { Pressable } from "react-native";
import { View } from "react-native";
import Card from "../Card";

function WordsLearntCard({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate("WordsLearnt")}>
      <Card border={true}>
        <Text style={styles.WordsKnownText}>Words known</Text>
      </Card>
    </Pressable>
  );
}

export default WordsLearntCard;

const styles = StyleSheet.create({
  WordsKnownText: {
    textAlign: "center",
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.75,
  },
});

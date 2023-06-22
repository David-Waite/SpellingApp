import { Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { Pressable } from "react-native";
import { View } from "react-native";

function WordsLearntCard({ navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate("WordsLearnt")}
      style={({ pressed }) => {
        pressed && styles.pressed;
      }}
    >
      <View style={styles.container}>
        <Text style={styles.WordsKnownText}>Words known</Text>
      </View>
    </Pressable>
  );
}

export default WordsLearntCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: 10,
  },
  WordsKnownText: {
    textAlign: "center",
    fontWeight: "semibold",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary300,
  },
});

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
      <View>
        <Text style={styles.WordsKnownText}>Words known</Text>
      </View>
    </Pressable>
  );
}

export default WordsLearntCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
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

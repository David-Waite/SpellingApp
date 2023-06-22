import { Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { Pressable } from "react-native";
import { View } from "react-native";

function WordsLearntCard({ navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate("WordsLearnt")}
      style={({ pressed }) => {
        [styles.container, pressed && styles.pressed];
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
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.primary800,
    borderWidth: 1,
  },
  WordsKnownText: {
    textAlign: "center",
    fontWeight: "500",
  },
});

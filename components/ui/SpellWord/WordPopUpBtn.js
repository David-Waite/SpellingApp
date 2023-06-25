import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function WordPopUpBtn({ correct, onPress, showingWord }) {
  let btnText = "Show word";
  if (correct || showingWord) {
    btnText = "Next word";
  }
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={[styles.container, correct && styles.correct]}>
        <Text style={styles.text}>{btnText}</Text>
      </View>
    </Pressable>
  );
}

export default WordPopUpBtn;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -125,
    alignSelf: "center",
    width: 150,
    padding: 10,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  correct: {
    backgroundColor: GlobalStyles.colors.success500,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  pressed: {
    opacity: 0.75,
  },
});

import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function WordPopUpBtn({ next, correct }) {
  function buttonPressHandler() {}

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={buttonPressHandler}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Show word</Text>
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

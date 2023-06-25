import { View, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import IconButton from "../IconButton";

function SpellButtons({ definiton, word }) {
  function definitionPressHandler() {
    Speech.speak(definiton);
  }

  function wordPressHandler() {
    Speech.speak(word);
  }

  return (
    <View style={styles.buttonContainer}>
      <IconButton
        icon="volume-high-outline"
        size={40}
        color={"grey"}
        onPress={wordPressHandler}
      />
      <IconButton
        icon="book-outline"
        size={40}
        color={"grey"}
        onPress={definitionPressHandler}
      />
    </View>
  );
}
export default SpellButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",

    justifyContent: "space-around",
  },
});

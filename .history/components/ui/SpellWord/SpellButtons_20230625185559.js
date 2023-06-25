import { View, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import IconButton from "../IconButton";

function SpellButtons({ definiton }) {
  const speak = () => {
    Speech.speak(definiton);
  };
  return (
    <View style={styles.buttonContainer}>
      <IconButton
        icon="volume-high-outline"
        size={40}
        color={"grey"}
        onPress={() => {}}
      />
      <IconButton
        icon="book-outline"
        size={40}
        color={"grey"}
        definiton={definiton}
        onPress={speak}
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

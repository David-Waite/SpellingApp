import { View, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import IconButton from "../IconButton";
import { useEffect } from "react";

function SpellButtons({ definiton, word }) {
  function definitionPressHandler() {
    Speech.speak(definiton);
  }

  async function wordPressHandler() {
    Speech.speak(word, {
      rate: 0.1,
      _voiceIndex: 2,
    });
  }
  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  React.useEffect(listAllVoiceOptions);

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

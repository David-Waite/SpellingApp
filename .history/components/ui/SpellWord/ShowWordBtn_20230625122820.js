import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function ShowWordBtn() {
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

export default ShowWordBtn;

const styles = StyleSheet.create({
  container: {
    marginBottom: -60,
    alignSelf: "center",
    width: 150,
    padding: 10,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.accent500,
    shadowColor: GlobalStyles.colors.accent500,
    shadowOffset: { width: 0, height: 0 },
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

import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { Text } from "react-native";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
function WordLearntItem({ word }) {
  const capitalizedWord = capitalizeFirstLetter(word);
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.container}>
        <Text style={styles.text}>{capitalizedWord}</Text>
      </View>
    </Pressable>
  );
}

export default WordLearntItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary300,
    paddingVertical: 7,
    marginBottom: 2,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary100D,
  },
  text: {
    paddingLeft: 20,
    fontSize: 16,
  },
});

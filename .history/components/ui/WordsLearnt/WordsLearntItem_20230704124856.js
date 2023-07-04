import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { Text } from "react-native";

function WordLearntItem({ word }) {
  return (
    <View style={styles.container}>
      <Text>{word}</Text>
    </View>
  );
}

export default WordLearntItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary300,
  },
});

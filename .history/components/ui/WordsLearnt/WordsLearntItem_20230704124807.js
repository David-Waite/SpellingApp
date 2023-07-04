import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { Text } from "react-native";

function WordLearntItem({ word }) {
  console.log(word);
  return (
    <View>
      <Text>{word}</Text>
    </View>
  );
}

export default WordLearntItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    padding: 20,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary300,
  },
});

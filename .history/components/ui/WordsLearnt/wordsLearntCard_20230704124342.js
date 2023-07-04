import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { Text } from "react-native";

function WordLearntCard({ word }) {
  <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
    <View style={styles.container}></View>
  </Pressable>;
}

export default WordLearntCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    padding: 20,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary300,
  },
});

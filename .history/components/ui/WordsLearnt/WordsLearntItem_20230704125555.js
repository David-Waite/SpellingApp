import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

function WordLearntItem({ word }) {
  const capitalizedWord = capitalizeFirstLetter(word);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{capitalizedWord}</Text>
    </View>
  );
}

export default WordLearntItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary100,
    paddingVertical: 7,
    marginBottom: 2,
  },

  text: {
    paddingLeft: 20,
    fontSize: 16,
  },
});

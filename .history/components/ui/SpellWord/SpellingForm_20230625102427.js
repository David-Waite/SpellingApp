import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm() {
  return (
    <View>
      <TextInput
        autoCompleteType="off"
        autoCorrect={false}
        spellCheck={false}
        keyboardType="url"
        style={styles.textInput}
      />
    </View>
  );
}

export default SpellingForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.accent500,
    fontSize: 36,
    height: 40,
    textAlign: "center",
  },
});

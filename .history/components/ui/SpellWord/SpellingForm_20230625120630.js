import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm() {
  return (
    <TextInput
      autoCompleteType="off"
      autoCorrect={false}
      spellCheck={false}
      keyboardType="url"
      style={styles.textInput}
      maxLength={13}
      autoFocus={true}
    />
  );
}

export default SpellingForm;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.accent500,
    fontSize: 36,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 4,
    textAlign: "center",
  },
});

import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm({ word, onChangeText }) {
  function pointless() {
    console.log("return");
  }
  return (
    <TextInput
      onChangeText={onChangeText}
      autoCompleteType="off"
      autoCorrect={false}
      spellCheck={false}
      keyboardType="url"
      style={styles.textInput}
      maxLength={word.length}
      autoFocus={true}
      onSubmitEditing={pointless}
    />
  );
}

export default SpellingForm;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 40,
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.accent500,
    fontSize: 36,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 4,
    textAlign: "center",
  },
});

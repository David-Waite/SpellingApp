import { StyleSheet } from "react-native";

import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm({ word, onSubmit, wordCorrect, onChange, value }) {
  return (
    <TextInput
      style={[
        styles.textInput,
        wordCorrect === null
          ? ""
          : wordCorrect
          ? styles.wordCorrect
          : styles.wordIncorrect,
      ]}
      autoCompleteType="off"
      autoCorrect={false}
      spellCheck={false}
      keyboardType="url"
      onChangeText={onChange}
      maxLength={word.length}
      autoFocus={true}
      onSubmitEditing={onSubmit}
      value={value}
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
  wordCorrect: {
    color: GlobalStyles.colors.success500,
  },
  wordIncorrect: {
    color: GlobalStyles.colors.error500,
  },
});

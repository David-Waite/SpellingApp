import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <TextInput
          autoCompleteType="off"
          autoCorrect={false}
          spellCheck={false}
          keyboardType="url"
          style={styles.textInput}
          maxLength={13}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default SpellingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
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

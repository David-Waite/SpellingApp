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
        keyboardType="UIKeyboardTypeEmailAddress"
        keyboardType={
          Platform.OS === "ios" ? "ascii-capable" : "visible-password"
        }
      />
    </View>
  );
}

export default SpellingForm;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

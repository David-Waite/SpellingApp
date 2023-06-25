import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm() {
  return (
    <View>
      <TextInput keyboardType="" autoCompleteType="off" />
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

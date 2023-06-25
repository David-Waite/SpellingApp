import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm() {
  return (
    <View>
      <TextInput />
    </View>
  );
}

export default SpellingForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

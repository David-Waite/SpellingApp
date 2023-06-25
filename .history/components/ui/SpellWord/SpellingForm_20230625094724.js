import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Input } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../constants/styles";

function SpellingForm() {
  return (
    <View>
      <Input keyboardType="" autoCompleteType="off" autoCorrect={false} />
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

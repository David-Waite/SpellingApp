import { StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Card({ children }) {
  return <View>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

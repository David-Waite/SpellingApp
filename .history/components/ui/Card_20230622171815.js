import { StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

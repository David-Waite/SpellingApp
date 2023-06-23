import { StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Card({ children, border }) {
  return <View style={styles.container}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary100,

    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  border: {
    borderColor: GlobalStyles.colors.primary800,
    borderWidth: 1,
  },
});

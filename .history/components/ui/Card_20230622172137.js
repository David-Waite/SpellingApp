import { StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Pressable } from "react-native";

function Card({ children }) {
  return (
    <View style={styles.container}>
      <Pressable>{children}</Pressable>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

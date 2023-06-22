import { StyleSheet } from "react-native";
import { View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Pressable } from "react-native";

function Card({ children, onPress, style, border }) {
  return (
    <View
      style={[styles.container, style ? style : styles.containerBackground]}
    >
      <Pressable onPress={onPress}>{children}</Pressable>
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
    border: border ? GlobalStyles.colors.primary800 : none,
  },
  containerBackground: {
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

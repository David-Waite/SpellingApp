import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function StatBtn({ stat, text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.stat}>{stat}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default StatBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  stat: {
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
  text: {
    color: "black",
  },
});

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

    borderRadius: 10,
  },
  stat: {
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
  text: {
    color: "black",
  },
});

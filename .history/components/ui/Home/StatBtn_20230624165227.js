import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function StatBtn({ stat, text, extraStyles }) {
  return (
    <View style={[styles.container, extraStyles && extraStyles]}>
      <Text style={styles.stat}>
        {stat}
        <Text style={styles.text}> {text}</Text>
      </Text>
    </View>
  );
}

export default StatBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: 150,
    justifyContent: "center",
  },
  stat: {
    fontSize: 16,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    fontWeight: 400,
  },
});

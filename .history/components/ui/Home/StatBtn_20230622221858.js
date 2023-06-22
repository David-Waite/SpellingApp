import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

function StatBtn({ stat, text }) {
  return (
    <View>
      <Text>{stat}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    fontWeight: blod,
  },
});

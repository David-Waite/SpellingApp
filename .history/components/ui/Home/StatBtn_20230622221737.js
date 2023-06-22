import { Text, View } from "react-native";

function StatBtn({ stat, text }) {
  return (
    <View>
      <Text>{stat}</Text>
      <Text>{text}</Text>
    </View>
  );
}

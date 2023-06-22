import { StyleSheet } from "react-native";
import { View } from "react-native";

function Card({ children }) {
  return <View>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
  },
});

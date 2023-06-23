import { StyleSheet } from "react-native";
import { View } from "react-native";

function Card({ children, border }) {
  return <View>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  container: {},
  border: {},
});

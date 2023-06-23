import { Text } from "react-native";
import Card from "../Card";
import { StyleSheet } from "react-native";

function AppInfo() {
  return (
    <Card border={true}>
      <Text style={styles.text}>How this app works</Text>
    </Card>
  );
}

export default AppInfo;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",

    fontWeight: "500",
  },
});

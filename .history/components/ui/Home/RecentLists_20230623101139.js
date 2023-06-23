import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Card from "../Card";

function RecentList({ title }) {
  return (
    <Card border={true} extraStyle={styles.container}>
      <Text style={styles.lable}>Continue where you left of</Text>
      <Text style={styles.title}>{title}</Text>
    </Card>
  );
}

export default RecentList;

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  lable: {
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
    fontSize: 16,
  },
});

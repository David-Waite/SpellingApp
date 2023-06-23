import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import Card from "../Card";

function RecentList({ lable, title }) {
  return (
    <Card>
      {" "}
      <Text style={styles.lable}>{lable}</Text>
      <Text style={styles.title}>{title}</Text>
    </Card>
  );
}

export default RecentList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderColor: GlobalStyles.colors.primary800,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 5,
  },
  lable: {
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
  },
});

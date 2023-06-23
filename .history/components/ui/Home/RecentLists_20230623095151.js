import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function RecentList({ lable, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default RecentList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderColor: GlobalStyles.colors.primary800,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  lable: {},
  title: {},
});

import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

function RecentList({ lable, title }) {
  return (
    <View style={styles.container}>
      <Text>{lable}</Text>
      <Text>{title}</Text>
    </View>
  );
}

export default RecentList;

const styles = StyleSheet.create({
  container: {},
  lable: {},
  title: {},
});

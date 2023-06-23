import { Text, View, StyleSheet } from "react-native";
import Card from "../Card";
import { GlobalStyles } from "../../../constants/styles";

function LearningListCard({ wordAmount }) {
  return (
    <Card>
      <Text>A list of the words you need to learn</Text>
      <View>
        <Text>Your Learning List</Text>
        <Text>{wordAmount}</Text>
      </View>
    </Card>
  );
}

export default LearningListCard;

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

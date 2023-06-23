import { Text, View, StyleSheet } from "react-native";
import Card from "../Card";
import { GlobalStyles } from "../../../constants/styles";

function LearningListCard({ wordAmount }) {
  return (
    <Card>
      <Text style={styles.lable}>A list of the words you need to learn</Text>
      <View style={styles.titleContaienr}>
        <Text style={styles.title}>Your Learning List</Text>
        <Text style={styles.wordAmount}>{wordAmount} words</Text>
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
  titleContaienr: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
    fontSize: 16,
  },
  wordAmount: {
    color: GlobalStyles.colors.primary50,
    fontSize: 14,
    fontWeight: "bold",
  },
});

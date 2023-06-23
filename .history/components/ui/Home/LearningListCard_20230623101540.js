import { Text, View, StyleSheet } from "react-native";
import Card from "../Card";
import { GlobalStyles } from "../../../constants/styles";

function LearningListCard({ wordAmount }) {
  return (
    <Card>
      <Text style={styles.lable}>A list of the words you need to learn</Text>
      <View style={styles.titleContaienr}>
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
  titleContaienr{},
  title: {
    fontWeight: "bold",
    color: GlobalStyles.colors.accent500,
    fontSize: 16,
  },

});

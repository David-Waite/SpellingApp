import { Text, View, StyleSheet } from "react-native";
import Card from "../Card";
import { GlobalStyles } from "../../../constants/styles";
import { Pressable } from "react-native";

function LearningListCard({ wordAmount, onPress }) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("SpellWord", {
          wordList: wordList,
        })
      }
    >
      <Card border={true} extraStyle={styles.container}>
        <Text style={styles.lable}>A list of the words you need to learn</Text>
        <View style={styles.titleContaienr}>
          <Text style={styles.title}>Your Learning List</Text>
          <Text style={styles.wordAmount}>{wordAmount} words</Text>
        </View>
      </Card>
    </Pressable>
  );
}

export default LearningListCard;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  lable: {
    fontSize: 12,
    color: GlobalStyles.colors.primary50,
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

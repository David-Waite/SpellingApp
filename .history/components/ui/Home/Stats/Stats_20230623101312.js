import { View, StyleSheet } from "react-native";
import StatBtn from "./StatBtn";

function Stats({ wordLearnt, dayStreak }) {
  return (
    <View style={styles.statContainer}>
      <StatBtn stat={0} text="words" />
      <StatBtn stat={0} text="day streak" />
    </View>
  );
}

export default Stats;

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
});
import { View, StyleSheet } from "react-native";
import StatBtn from "./StatBtn";
function Stats() {
  return (
    <View style={styles.statContainer}>
      <StatBtn stat={0} text="words" />
      <StatBtn stat={0} text="day streak" />
    </View>
  );
}

export default Stats;

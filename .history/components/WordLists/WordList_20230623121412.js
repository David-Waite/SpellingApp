import Card from "../ui/Card";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function WordList({ title }) {
  return (
    <Pressable style={styles.outerContainer}>
      <Card>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name="chevron-forward-outline" size={24} />
        </View>
      </Card>
    </Pressable>
  );
}

export default WordList;

const styles = StyleSheet.create({
  outerContainer: {
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
  },
});

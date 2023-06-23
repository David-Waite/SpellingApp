import Card from "../ui/Card";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function WordList({ title }) {
  return (
    <Pressable>
      <Card>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <Ionicons name="chevron-forward-outline" size={24} />
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

export default WordList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
  },
});

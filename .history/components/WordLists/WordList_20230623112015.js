import Card from "../ui/Card";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function WordList({ title }) {
  return (
    <Pressable>
      <Card>
        <Text>{title}</Text>
        <Ionicons name="chevron-forward-outline"></Ionicons>
      </Card>
    </Pressable>
  );
}

export default WordList;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "spaceBetween",
  },
});

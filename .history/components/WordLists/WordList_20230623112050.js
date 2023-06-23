import Card from "../ui/Card";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function WordList({ title }) {
  return (
    <Pressable>
      <Card style={styles.container}>
        <Text>{title}</Text>
        <Ionicons name="chevron-forward-outline"></Ionicons>
      </Card>
    </Pressable>
  );
}

export default WordList;

const styles = StyleSheet.create({
  container: {
    f,
  },
});

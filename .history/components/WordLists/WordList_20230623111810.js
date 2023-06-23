import { Children } from "react/cjs/react.production.min";
import Card from "../ui/Card";
import { Pressable, Text } from "react-native";

function WordList({ title }) {
  return (
    <Pressable>
      <Card>
        <Text>{title}</Text>
      </Card>
    </Pressable>
  );
}

export default WordList;

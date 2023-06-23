import { Children } from "react/cjs/react.production.min";
import Card from "../ui/Card";
import { Pressable, Text } from "react-native";

function WordList({ Children }) {
  return (
    <Pressable>
      <Card>
        <Text>{Children}</Text>
      </Card>
    </Pressable>
  );
}

export default WordList;

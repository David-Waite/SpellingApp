import { Children } from "react/cjs/react.production.min";
import Card from "../ui/Card";
import { Pressable, Text } from "react-native";

function WordList({ children }) {
  return (
    <Pressable>
      <Card>
        <Text>{children}</Text>
      </Card>
    </Pressable>
  );
}

export default WordList;

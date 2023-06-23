import { Text, View } from "react-native";
import Card from "../Card";

function LearningListCard({ lable, title, wordAmount }) {
  return (
    <Card>
      <Text>A list of the words you need to learn</Text>
      <View>
        <Text>{title}</Text>
        <Text>{wordAmount}</Text>
      </View>
    </Card>
  );
}

export default LearningListCard;

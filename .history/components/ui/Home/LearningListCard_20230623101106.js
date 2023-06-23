import { Text, View } from "react-native";
import Card from "../Card";

function LearningListCard({ wordAmount }) {
  return (
    <Card>
      <Text>A list of the words you need to learn</Text>
      <View>
        <Text>Your Learning List</Text>
        <Text>{wordAmount}</Text>
      </View>
    </Card>
  );
}

export default LearningListCard;

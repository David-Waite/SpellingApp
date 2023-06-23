import { Text, View } from "react-native";
import Card from "../Card";

function LearningListCard({ lable, title, wordAmount }) {
  return (
    <Card>
      <Text>{lable}</Text>
      <View>
        <Text>{title}</Text>
        <Text>{wordAmount}</Text>
      </View>
    </Card>
  );
}

export default LearningListCard;

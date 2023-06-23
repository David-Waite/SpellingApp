import { Text, View } from "react-native";
import Card from "../Card";

function QuoteCard({ title, Quote, Author }) {
  return (
    <Card>
      <View>
        <Text>{title}</Text>
        <Text>{Quote}</Text>
        <Text> - {Author}</Text>
      </View>
    </Card>
  );
}

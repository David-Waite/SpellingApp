import { Text, View } from "react-native";
import Card from "../Card";
import { StyleSheet } from "react-native";

function QuoteCard({ title, Quote, Author }) {
  return (
    <Card>
      <View>
        <Text>{title}</Text>
        <View>
          <Text>
            "{Quote}"<Text> - {Author}</Text>
          </Text>
        </View>
      </View>
    </Card>
  );
}

export default QuoteCard;

const styles = StyleSheet.create({
  container: {},
});

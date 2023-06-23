import { Text, View } from "react-native";
import Card from "../Card";
import { StyleSheet } from "react-native";

function QuoteCard({ title, Quote, Author }) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "{Quote}" - <Text style={styles.author}>{Author}</Text>
          </Text>
        </View>
      </View>
    </Card>
  );
}

export default QuoteCard;

const styles = StyleSheet.create({
  container: {},
  title: {},
  quoteContainer: {},
  quote: {},
  author: {},
});

import { Text, View } from "react-native";
import Card from "../Card";
import { StyleSheet } from "react-native";

function QuoteCard({ title, quote, author }) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            "{quote}" - <Text style={styles.author}>{author}</Text>
          </Text>
        </View>
      </View>
    </Card>
  );
}

export default QuoteCard;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 16,
  },
  quoteContainer: {},
  quote: {},
  author: {},
});

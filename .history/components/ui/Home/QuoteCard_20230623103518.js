import { Text, View } from "react-native";
import Card from "../Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

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
  container: {
    gap: 5,
  },
  title: {
    fontSize: 16,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
  quote: {
    fontStyle: "italic",
  },
  author: {
    color: GlobalStyles.colors.accent500,
    fontWeight: 500,
  },
});

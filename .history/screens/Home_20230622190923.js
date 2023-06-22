import { Text, View } from "react-native";
import Card from "../components/ui/Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
function Home({ navigation }) {
  return (
    <View style={style.container}>
      <Card>
        <Text
          style={style.WordsKnownText}
          onPress={() => navigation.navigate("WordsLearnt")}
        >
          Words known
        </Text>
      </Card>
    </View>
  );
}

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
  },
  WordsKnownText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

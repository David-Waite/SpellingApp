import { Text, View } from "react-native";
import Card from "../components/ui/Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
function Home({ navigation }) {
  return (
    <View style={style.container}>
      <Card>
        <Text onPress={() => navigation.navigate("WordsLearnt")}>
          WordsKnown
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
});

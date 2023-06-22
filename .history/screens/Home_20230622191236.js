import { Text, View } from "react-native";
import Card from "../components/ui/Card";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import WordsLearnt from "./WordsLearnt";
import WordsLearntCard from "../components/ui/WordsLearntCard";
function Home({ navigation }) {
  return (
    <View style={style.container}>
      <WordsLearntCard />
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

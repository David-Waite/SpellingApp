import { ImageBackground, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import WordsLearnt from "./WordsLearnt";
import WordsLearntCard from "../components/ui/WordsLearntCard";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../images/SpellingAppHeaderBackground.png")}
      ></ImageBackground>
      <WordsLearntCard navigation={navigation} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  ImageBackground: {
    resizeMode: "cover",
  },
});

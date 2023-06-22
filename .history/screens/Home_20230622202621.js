import { Image, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import WordsLearnt from "./WordsLearnt";
import WordsLearntCard from "../components/ui/WordsLearntCard";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.ImageBackground}
        source={require("../images/SpellingAppHeaderBackground.png")}
      ></Image>
      <WordsLearntCard navigation={navigation} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    alignItems: "center",
  },
  ImageBackground: {
    resizeMode: "contain",
    height: 200,
    justifyContent: "center",

    width: 200,
  },
});

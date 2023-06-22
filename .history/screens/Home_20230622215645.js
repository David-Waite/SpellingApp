import { ImageBackground, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import WordsLearntCard from "../components/ui/Home/WordsLearntCard";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../images/SpellingAppHeaderBackground.png")}
      >
        <WordsLearntCard navigation={navigation} />
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  ImageBackground: {
    resizeMode: "contain",
    height: 200,
    justifyContent: "center",
  },
});

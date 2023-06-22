import { ImageBackground, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import WordsLearnt from "./WordsLearnt";
import WordsLearntCard from "../components/ui/WordsLearntCard";
function Home({ navigation }) {
  return (
   
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../images/SpellingAppHeaderBackground.png")}
      >
        <View style={styles.container}></View>
      </ImageBackground>
      <WordsLearntCard navigation={navigation} />
    
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,

    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});

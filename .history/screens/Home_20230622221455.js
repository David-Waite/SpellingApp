import { ImageBackground, Text, View } from "react-native";
import { Dimensions } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import WordsLearntCard from "../components/ui/WordsLearntCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imageHeight = windowWidth / 3.5;

function Home({ navigation }) {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../images/SpellingAppHeaderBackground.png")}
      >
        <View></View>
        <WordsLearntCard navigation={navigation} />
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  ImageBackground: {
    resizeMode: "contain",
    width: windowWidth,
    height: imageHeight,
  },
});

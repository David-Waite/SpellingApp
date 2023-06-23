import { ImageBackground, Text, View } from "react-native";
import { Dimensions } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import WordsLearntCard from "../components/ui/Home/WordsLearntCard";
import StatBtn from "../components/ui/Home/StatBtn";
import RecentList from "../components/ui/Home/RecentLists";

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
        <View style={styles.container}>
          <View style={styles.statContainer}>
            <StatBtn stat={0} text="words" />
            <StatBtn stat={0} text="day streak" />
          </View>

          <RecentList lable="Continue where you left of" />
          <WordsLearntCard navigation={navigation} />
        </View>
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
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 40,
  },
  container: {
    padding: 20,
    paddingTop: 35,
  },
  ImageBackground: {
    resizeMode: "contain",
    width: windowWidth,
    height: imageHeight,
  },
});

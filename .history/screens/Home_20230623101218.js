import { ImageBackground, Text, View } from "react-native";
import { Dimensions } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import WordsLearntCard from "../components/ui/Home/WordsLearntCard";
import StatBtn from "../components/ui/Home/Stats/StatBtn";
import RecentList from "../components/ui/Home/RecentLists";
import Stats from "../components/ui/Home/Stats/Stats";
import LearningListCard from "../components/ui/Home/LearningListCard";

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
          <Stats />

          <RecentList recentList="example List" />
          <WordsLearntCard navigation={navigation} />
          <LearningListCard />
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
  container: {
    padding: 20,
    paddingTop: 35,
    gap: 15,
  },
  ImageBackground: {
    resizeMode: "contain",
    width: windowWidth,
    height: imageHeight,
  },
});

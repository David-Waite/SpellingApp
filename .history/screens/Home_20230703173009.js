import { ImageBackground, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useSelector } from "react-redux";

import WordsLearntCard from "../components/ui/Home/WordsLearntCard";
import StatBtn from "../components/ui/StatBtn";
import RecentList from "../components/ui/Home/RecentLists";
import Stats from "../components/ui/Home/Stats/Stats";
import LearningListCard from "../components/ui/Home/LearningListCard";
import QuoteCard from "../components/ui/Home/QuoteCard";
import AppInfo from "../components/ui/Home/AppInfo";
import BackgroundImage from "../components/ui/BackgroundImage";

const DUMMY_QUOTE = {
  title: "Be Consistent",
  quote:
    "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  author: "Dwayne Johnson",
};

function Home({ navigation }) {
  const learningList = useSelector((state) => state.words.learningList);

  function learningListPressHandler() {
    navigation.navigate("WordListOverview", {
      listId: "learningList",
    });
  }

  const wordsLearnt = useSelector((state) => state.words.completedList.length);
  const learningListAmount = learningList.words.length;

  return (
    <BackgroundImage>
      <View style={styles.container}>
        {/* <Stats dayStreak={0} wordLearnt={wordsLearnt} />
        <RecentList recentList="example List" />
        <LearningListCard
          wordAmount={learningListAmount}
          onPress={learningListPressHandler}
        /> */}
        <QuoteCard
          title={DUMMY_QUOTE.title}
          quote={DUMMY_QUOTE.quote}
          author={DUMMY_QUOTE.author}
        />
        <AppInfo />
        <WordsLearntCard navigation={navigation} />
      </View>
    </BackgroundImage>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
    gap: 15,
  },
});

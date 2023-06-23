import { ImageBackground, Text, View } from "react-native";

import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

import WordsLearntCard from "../components/ui/Home/WordsLearntCard";
import StatBtn from "../components/ui/Home/Stats/StatBtn";
import RecentList from "../components/ui/Home/RecentLists";
import Stats from "../components/ui/Home/Stats/Stats";
import LearningListCard from "../components/ui/Home/LearningListCard";
import QuoteCard from "../components/ui/Home/QuoteCard";
import AppInfo from "../components/ui/Home/AppInfo";

const DUMMY_QUOTE = {
  title: "Be Consistent",
  quote:
    "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
  author: "Dwayne Johnson",
};

function Home({ navigation }) {
  return (
    <ImageBackground>
      <View style={styles.container}>
        <Stats dayStreak={0} wordLearnt={0} />

        <RecentList recentList="example List" />
        <LearningListCard wordAmount={0} />
        <QuoteCard
          title={DUMMY_QUOTE.title}
          quote={DUMMY_QUOTE.quote}
          author={DUMMY_QUOTE.author}
        />
        <AppInfo />
        <WordsLearntCard navigation={navigation} />
      </View>
    </ImageBackground>
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

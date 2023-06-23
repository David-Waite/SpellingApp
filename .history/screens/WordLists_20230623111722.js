import { StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/ui/BackgroundImage";
import WordList from "../components/WordLists/WordList";

function WordLists({ navigation }) {
  return (
    <BackgroundImage>
      <View style={style.container}>
        <WordList>Example</WordList>
        <Text onPress={() => navigation.navigate("WordListOverview")}>
          Example list
        </Text>
      </View>
    </BackgroundImage>
  );
}

export default WordLists;

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
    gap: 15,
  },
});

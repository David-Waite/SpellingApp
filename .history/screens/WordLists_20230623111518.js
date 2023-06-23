import { Text } from "react-native";
import BackgroundImage from "../components/ui/BackgroundImage";
import WordList from "../components/WordLists/WordList";

function WordLists({ navigation }) {
  return (
    <BackgroundImage>
      <WordList>Example</WordList>
      <Text onPress={() => navigation.navigate("WordListOverview")}>
        Example list
      </Text>
    </BackgroundImage>
  );
}

export default WordLists;

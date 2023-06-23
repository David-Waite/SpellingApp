import { Text } from "react-native";
import BackgroundImage from "../components/ui/BackgroundImage";

function WordLists({ navigation }) {
  return (
    <BackgroundImage>
      <Text onPress={() => navigation.navigate("WordListOverview")}>
        Example list
      </Text>
    </BackgroundImage>
  );
}

export default WordLists;

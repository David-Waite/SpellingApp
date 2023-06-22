import { Text } from "react-native";
import Card from "../components/ui/Card";
function WordListOverview({ navigation }) {
  return (
    <Card>
      <Text onPress={() => navigation.navigate("SpellWord")}>WordsKnown</Text>
    </Card>
  );
}

export default WordListOverview;

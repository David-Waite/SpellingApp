import { Text, View } from "react-native";
import Card from "../components/ui/Card";
function Home() {
  return (
    <View>
      <Card>
        <Text onPress={() => navigation.navigate("WordsLearnt")}>
          WordsKnown
        </Text>
      </Card>
    </View>
  );
}

export default Home;

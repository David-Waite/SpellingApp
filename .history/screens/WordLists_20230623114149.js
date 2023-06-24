import { FlatList, StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/ui/BackgroundImage";
import WordList from "../components/WordLists/WordList";

import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";

function renderWordLists({ title }) {
  console.log(itemData.title);
  console.log("hello");
  return <WordList title={itemData.title} />;
}

function WordLists({ navigation }) {
  return (
    <BackgroundImage>
      <View style={style.container}>
        <FlatList
          data={DUMMYDATA}
          renderItem={renderWordLists}
          key={(item) => {
            item.title;
          }}
        />
        <WordList title="example" />
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

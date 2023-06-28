import { FlatList, StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../components/ui/BackgroundImage";
import WordList from "../components/WordLists/WordList";

import { useSelector } from "react-redux";

import DUMMYDATA from "../DUMMYDATA/DUMMYDATA";

function WordLists() {
  const wordsLists = useSelector((state) => state.words.wordsLists);
  console.log(wordsLists);
  return (
    <BackgroundImage>
      <View style={style.container}>
        <FlatList
          data={wordsLists}
          renderItem={({ item }) => (
            <WordList title={item.title} id={item.id} />
          )}
          key={(item) => {
            item.title;
          }}
        />
      </View>
    </BackgroundImage>
  );
}

export default WordLists;

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    gap: 15,
  },

  flatList: {
    flex: 1,
  },
});

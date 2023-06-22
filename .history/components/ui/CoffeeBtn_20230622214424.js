import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";

function CoffeeBtn({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.conatiner}>
        <Image
          style={styles.coffee}
          source={require("../../images/coffee-cup.png")}
        />
        <Text style={styles.text}>Buy me a coffee</Text>
      </View>
    </Pressable>
  );
}

export default CoffeeBtn;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {},
  coffee: {
    width: 40,
    height: 40,
  },
});

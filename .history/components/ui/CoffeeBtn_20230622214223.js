import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";

function CoffeeBtn({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image  source={require("../../images/coffee-cup.png")} />
        <Text>Buy me a coffee</Text>
      </View>
    </Pressable>
  );
}

export default CoffeeBtn;

const styles = StyleSheet.create({
    coffee: {
        width: 4-
    }
})
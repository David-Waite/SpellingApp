import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

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
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: 500,
  },
  coffee: {
    width: 20,
    height: 20,
  },
});

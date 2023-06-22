import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function CoffeeBtn({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.conatiner, pressed && styles.pressed]}
    >
      <View style={styles.layoutConatiner}>
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
    paddingLeft: 10,
    paddingRight: 14,
    paddingVertical: 5,
    marginRight: 20,
    marginBottom: -60,
  },
  layoutConatiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: 700,
  },
  coffee: {
    width: 30,
    height: 30,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary100Dark,
    borderRadius: 20,
  },
});

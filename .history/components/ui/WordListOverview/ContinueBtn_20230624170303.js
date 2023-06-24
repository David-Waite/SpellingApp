import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";

function ContinueBtn() {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.container}>
        <Text style={styles.text}></Text>
      </View>
    </Pressable>
  );
}

export default ContinueBtn;

const styles = StyleSheet.create({
  container: {},
  text: {},
  pressed: {},
});

import { Text, View, StyleSheet } from "react-native";
import Card from "../components/ui/Card";
import {} from "react-native";
import OpenUrl from "../components/ui/OpenUrl";

function Donate() {
  return (
    <View>
      <Text>Buy me a coffee</Text>
      <Card>
        <Text>
          Hey if your enjoying this app and you’d like to help me out consider
          clicking the link below. Thank you for using my app
        </Text>
      </Card>
      <OpenUrl url="https://google.com">
        <View>
          <Text>Pay with PayPal.Me</Text>
        </View>
      </OpenUrl>
    </View>
  );
}

export default Donate;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
  },
});

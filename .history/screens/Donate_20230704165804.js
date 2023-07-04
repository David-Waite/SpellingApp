import { Text, View, StyleSheet } from "react-native";
import Card from "../components/ui/Card";
import OpenUrl from "../components/ui/OpenUrl";
import { GlobalStyles } from "../constants/styles";
function Donate() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy me a coffee</Text>
      <Card>
        <Text>
          Hey if your enjoying this app and you’d like to help me out consider
          clicking the link below. Thank you for using my app
        </Text>
      </Card>
      <OpenUrl url="https://www.paypal.com/paypalme/simpleespellit">
        <View style={styles.payLinkContainer}>
          <Text style={styles.payLinkText}>Pay with PayPal.Me</Text>
        </View>
      </OpenUrl>
    </View>
  );
}

export default Donate;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalStyles.colors.background,

    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
    marginBottom: 20,
  },
  payLinkContainer: {
    backgroundColor: GlobalStyles.colors.accent500,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  payLinkText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App; // import { Text, View, StyleSheet } from "react-native";
// import Card from "../components/ui/Card";
// import {} from "react-native";
// import OpenUrl from "../components/ui/OpenUrl";
// import { GlobalStyles } from "../constants/styles";
// function Donate() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Buy me a coffee</Text>
//       <Card>
//         <Text>
//           Hey if your enjoying this app and you’d like to help me out consider
//           clicking the link below. Thank you for using my app
//         </Text>
//       </Card>
//       <OpenUrl url="https://google.com">
//         <View>
//           <Text>Pay with PayPal.Me</Text>
//         </View>
//       </OpenUrl>
//     </View>
//   );
// }

// export default Donate;

// const styles = StyleSheet.create({
//   container: {},
//   title: {
//     fontSize: 18,
//     color: GlobalStyles.colors.accent500,
//     fontWeight: "bold",
//   },
// });

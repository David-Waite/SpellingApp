import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Donate = () => {
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

export default Donate; // import { Text, View, StyleSheet } from "react-native";
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

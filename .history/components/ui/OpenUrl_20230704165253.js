import { useCallback } from "react";
import { Pressable } from "react-native";
import { Alert, View } from "react-native";
import { Linking } from "react-native";

function OpenUrl({ url, children }) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable title={children} onPress={handlePress}>
      {children}
    </Pre>
  );
}

export default OpenUrl;

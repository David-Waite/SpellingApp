import { View, StyleSheet, ImageBackground } from "react-native";
function BackgroundImage() {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../images/SpellingAppHeaderBackground.png")}
      ></ImageBackground>
    </View>
  );
}
export default BackgroundImage;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  container: {
    padding: 20,
    paddingTop: 35,
    gap: 15,
  },
  ImageBackground: {
    resizeMode: "contain",
    width: windowWidth,
    height: imageHeight,
  },
});

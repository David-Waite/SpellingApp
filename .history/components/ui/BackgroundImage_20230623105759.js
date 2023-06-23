import { View, StyleSheet, ImageBackground } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const imageHeight = windowWidth / 3.5;

function BackgroundImage({ children }) {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../../images/SpellingAppHeaderBackground.png")}
      >
        {children}
      </ImageBackground>
    </View>
  );
}
export default BackgroundImage;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  ImageBackground: {
    resizeMode: "contain",
    width: windowWidth,
    height: imageHeight,
  },
});

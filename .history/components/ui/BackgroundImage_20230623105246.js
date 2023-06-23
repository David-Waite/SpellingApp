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

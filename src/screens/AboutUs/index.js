import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AboutUs() {
  return (
    <View style={styles.container}>
      <Text>About Us Screen!</Text>
    </View>
  );
}

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

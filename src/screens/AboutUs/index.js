import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./styles";

function AboutUs() {
  return (
    <Container>
      <Text>About Us Screen!</Text>
    </Container>
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

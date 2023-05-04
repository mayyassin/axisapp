import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Container, Logo, ChatButton, AboutButton, ButtonText } from "./styles";
import axislogo from "../../../assets/axis-logo-transparent.png";

function Home({ navigation }) {
  return (
    <Container>
      <Logo source={axislogo} alt="logo" />

      <ChatButton
        title="Start Chatting"
        onPress={() => navigation.navigate("Chat")}
      >
        <ButtonText>Start Chatting</ButtonText>
      </ChatButton>
      <AboutButton
        title="About Axis"
        onPress={() => navigation.navigate("AboutUs")}
      >
        <ButtonText>About Us</ButtonText>
      </AboutButton>
    </Container>
  );
}

export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

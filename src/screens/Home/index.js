import React from "react";
import { Container, Logo, ChatButton, AboutButton, ButtonText } from "./styles";
import axislogo from "../../../assets/axis-logo-transparent.png";

function Home({ navigation }) {
  return (
    <Container>
      <Logo source={axislogo} alt="logo" />

      <ChatButton onPress={() => navigation.navigate("Chat")}>
        <ButtonText>Start Chatting</ButtonText>
      </ChatButton>
      <AboutButton onPress={() => navigation.navigate("AboutUs")}>
        <ButtonText>About Axis</ButtonText>
      </AboutButton>
    </Container>
  );
}

export default Home;

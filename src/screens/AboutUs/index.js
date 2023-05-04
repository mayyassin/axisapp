import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AboutText, Container } from "./styles";

function AboutUs() {
  return (
    <Container>
      <AboutText>
        AXIS is a research centre based in Dubai, United Arab Emirates with a
        focus on empowering retail investors with access to its premier
        published financial information and services by leveraging technology to
        communicate with mass clients in a coherent manner. AXIS will provide
        informational products and services to the investment community, such as
        real-time cryptocurrencies price, stock quotes and financial news and
        analysis via its chatbot. AXIS strives to be the users first option for
        reliable financial-business information. We look forward of becoming a
        one stop solution for investors looking for up to the minute,
        comprehensive, and analytical financial data and information on the
        global financial markets. AXIS will enable users to make informed
        decisions during the ever-changing market dynamics; eliminating any
        intermediary search engines to enhance customer convenience It also
        strives to build a powerful community by educating the customers with
        its in built beginner’s library familiarizing them with the terms used
        in everyday financial world.
      </AboutText>
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

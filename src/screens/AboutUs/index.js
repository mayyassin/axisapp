import React from "react";
import { AboutText, Container, Footer, ContentView } from "./styles";

function AboutUs() {
  return (
    <Container>
      <ContentView>
        <AboutText>
          AXIS is a research centre based in Dubai, United Arab Emirates with a
          focus on empowering retail investors with access to its premier
          published financial information and services by leveraging technology
          to communicate with mass clients in a coherent manner. AXIS will
          provide informational products and services to the investment
          community, such as real-time cryptocurrencies price, stock quotes and
          financial news and analysis via its chatbot. {"\n\n"}
          AXIS strives to be the users first option for reliable
          financial-business information. We look forward of becoming a one stop
          solution for investors looking for up to the minute, comprehensive,
          and analytical financial data and information on the global financial
          markets.{"\n\n"} AXIS will enable users to make informed decisions
          during the ever-changing market dynamics; eliminating any intermediary
          search engines to enhance customer convenience.{"\n\n"} It also
          strives to build a powerful community by educating the customers with
          its in built beginner’s library familiarizing them with the terms used
          in everyday financial world.
        </AboutText>
      </ContentView>
      <Footer>
        <AboutText>
          Axis Research and Publishing Center - FZCO DSO-IFZA, Dubai 449631, UAE
        </AboutText>
      </Footer>
    </Container>
  );
}

export default AboutUs;

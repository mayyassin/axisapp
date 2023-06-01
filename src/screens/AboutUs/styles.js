import styled from "styled-components/native";
import * as palette from "../../variables.js";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
  border: solid;
  width: ${width * 1}px;
  height: ${height * 0.5}px;
`;

export const ContentView = styled.ScrollView`
  padding-top: 32px;
  padding-left: 56px;
  padding-right: 56px;
`;

export const ChatIcon = styled.Image`
  height: 5%;
  width: 5%;
  margin-bottom: 60px;
`;
export const AboutText = styled.Text`
  font-family: TSRotger_Regular;
  font-size: 17.5px;
`;

export const FooterText = styled.Text`
  font-family: TSRotger_Regular;
  font-size: 16px;
`;

export const Footer = styled.View`
  background-color: ${palette.primaryblue};
  height: 100px;
  width: 100%;
  border: solid;
  padding: 16px;
`;

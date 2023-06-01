import styled from "styled-components/native";
import * as palette from "../../variables.js";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.primaryblue};
  align-items: center;
  justify-content: center;
  width: ${width * 1}px;
  height: ${height * 0.5}px;
`;

export const Logo = styled.Image`
  height: 15%;
  width: 55%;
  margin-bottom: 60px;
`;

export const ChatButton = styled.TouchableOpacity`
  background-color: ${palette.yellow};
  width: 80%;
  border-radius: 20%;
  border-color: ${palette.black};
  border-width: 1px;
  padding-top: 3px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ButtonText = styled.Text`
  font-family: TSRotger_Regular;
  font-weight: bolder;
  font-size: 24px;
  text-align: center;
  padding-top: 5px;
`;

export const AboutButton = styled.TouchableOpacity`
  background-color: ${palette.orange};
  width: 80%;
  border-radius: 20%;
  border-color: ${palette.black};
  border-width: 1px;
  padding-top: 3px;
  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 240px;
`;

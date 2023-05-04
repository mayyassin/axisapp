import styled from "styled-components/native";

// export const Container = styled.View`
//     flex: 1,
//     backgroundColor: "#1ecad4",
//     alignItems: "center",
//     justifyContent: "center",
// `;

export const Container = styled.View`
  flex: 1;
  background-color: #1ecad4;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 15%;
  width: 55%;
  margin-bottom: 60px;
`;

export const ChatButton = styled.TouchableOpacity`
  background-color: #ffc600;
  width: 60%;
  border-radius: 20%;
  border-color: #000000;
  border-width: 0.5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export const AboutButton = styled.TouchableOpacity`
  background-color: #ff671d;
  width: 60%;
  border-radius: 20%;
  border-color: #000000;
  border-width: 0.5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 240px;
`;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import ChatScreen from "../screens/ChatScreen";
import chaticon from "../../assets/chaticon.png";
import axisParrot from "../../assets/parrotcirclewhite.png";
import arrowleft from "../../assets/arrowleft.png";
import { ChatIcon, LogoIcon, ArrowLeft, HeaderText } from "./styles";

function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: "black",
          headerBackTitleStyle: {
            color: "black",
            backgroundColor: "black",
          },
          headerStyle: {
            backgroundColor: "#1ecad4",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: null, headerShadowVisible: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={() => ({
            headerBackVisible: true,
            headerTitle: () => (
              <Text
                style={{
                  fontFamily: "Manjari_700Bold",
                  fontSize: 28,
                  marginTop: 10,
                  marginRight: 150,
                }}
              >
                axis
              </Text>
            ),
            headerLeft: () => <LogoIcon source={axisParrot} alt="icon" />,
          })}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={({ navigation }) => ({
            title: "About Axis",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                title="chat"
              >
                <View>
                  <ChatIcon source={chaticon} alt="icon" />
                </View>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.5}
                title="chat"
              >
                <View>
                  <HeaderText>_</HeaderText>

                  <ArrowLeft source={arrowleft} alt="icon" />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

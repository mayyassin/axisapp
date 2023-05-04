import React from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import ChatScreen from "../screens/ChatScreen";
import chaticon from "../../assets/chaticon.png";
import axisparrotlogo from "../../assets/AxisParrotLogo.png";
import axislogofull from "../../assets/axislogofull.png";
import arrowleft from "../../assets/arrowleft.png";
import { ChatIcon, LogoIcon, ArrowLeft, HeaderText } from "./styles";

function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1ecad4",
            borderBottomWidth: 5,
            borderBottomColor: "#000",
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
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.5}
                title="chat"
              >
                <View>
                  <HeaderText>_</HeaderText>

                  <LogoIcon source={axislogofull} alt="icon" />
                </View>
              </TouchableOpacity>
            ),
            title: null,
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
                activeOpacity={0.5}
                title="chat"
              >
                <View>
                  <HeaderText>_</HeaderText>

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

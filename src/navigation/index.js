import React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import ChatScreen from "../screens/ChatScreen";

function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={({ navigation }) => ({
            title: "Hey axis",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Chat")}
                title="Chat"
                color="#00cc00"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1ecad4",
          },
        }}
      >
        <Stack.Screen name=" " component={Home} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={({ navigation }) => ({
            title: "About Axis",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Chat")}
                title="Chat"
                color="#000000"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/navigation";
import Home from "./src/screens/Home";
import {
  useFonts,
  Manjari_400Regular,
  Manjari_100Thin,
  Manjari_700Bold,
} from "@expo-google-fonts/manjari";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Manjari_100Thin,
    Manjari_400Regular,
    Manjari_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return <RootNavigator />;
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/navigation";
import Home from "./src/screens/Home";

export default function App() {
  return <RootNavigator />;
}

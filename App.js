import RootNavigator from "./src/navigation";
import {
  useFonts,
  Manjari_400Regular,
  Manjari_100Thin,
  Manjari_700Bold,
} from "@expo-google-fonts/manjari";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    TSRotger_Regular: require("./assets/TSRotger-Regular.ttf"),
    TSRotger_Bold: require("./assets/TSRotger-Bold.ttf"),
    TSRotger_Light: require("./assets/TSRotger-Light.ttf"),
    TSRotger_Black: require("./assets/TSRotger-Black.ttf"),
    Manjari_100Thin,
    Manjari_400Regular,
    Manjari_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return <RootNavigator />;
}

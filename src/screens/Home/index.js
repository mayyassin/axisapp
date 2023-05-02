import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32 }}>HomeScreen!</Text>
      <Button
        title="Start Chatting"
        onPress={() => navigation.navigate("Chat")}
      />
      <Button
        title="About Axis"
        onPress={() => navigation.navigate("AboutUs")}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

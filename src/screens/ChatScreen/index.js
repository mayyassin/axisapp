import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>Chat Screen!</Text>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

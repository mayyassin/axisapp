import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

function ChatScreen() {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Chat Screen!</Text>
      <TextInput style={styles.textDesign} placeholder="type here" />
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
  textDesign: {
    backgroundColor: "light grey",
    width: "90%",
    borderRadius: "100%",
    borderWidth: "0.5px",
  },
});

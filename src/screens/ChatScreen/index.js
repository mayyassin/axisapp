import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  InputAccessoryView,
  Button,
} from "react-native";
import { Container } from "./styles";
import axios from "axios";

function ChatScreen() {
  const [message, setMessage] = useState("Placeholder Text");
  const [chatLog, setChatLog] = useState([]);

  const handleMessage = async () => {
    // Make an API call to Rasa
    const response = await axios.post(
      "http://<rasa-server-ip>:<rasa-server-port>/webhooks/rest/webhook",
      {
        message: message,
      }
    );

    // Update the chat log
    const newChatLog = [...chatLog, ...response.data];
    setChatLog(newChatLog);

    // Clear the input field
    setMessage("");
  };

  const inputAccessoryViewID = "inputAccessoryView1";
  return (
    <Container>
      <View>
        {chatLog.map((chat, index) => (
          <Text key={index}>{chat.text}</Text>
        ))}
      </View>
      <TextInput
        style={styles.default}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={(message) => setMessage({ message })}
        value={message}
      />
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#63BECA",
            borderColor: "black",
            borderTopWidth: 1,
          }}
        >
          <Button
            onPress={() => setMessage("Placeholder Text")}
            title="Reset Text"
          />
          <View style={{ marginLeft: 90 }}>
            <Button onPress={handleMessage} title="Send" />
          </View>
        </View>
      </InputAccessoryView>
    </Container>
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

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  InputAccessoryView,
  Button,
} from "react-native";
import { Container } from "./styles";

function ChatScreen() {
  const [text, setText] = useState("Placeholder Text");
  const inputAccessoryViewID = "inputAccessoryView1";
  return (
    <Container>
      <TextInput
        style={styles.default}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={(text) => setText({ text })}
        value={text}
      />
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <View
          style={{
            backgroundColor: "#63BECA",
            borderColor: "black",
            borderTopWidth: 1,
          }}
        >
          <Button
            onPress={() => setText("Placeholder Text")}
            title="Reset Text"
          />
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

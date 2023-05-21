import React, { useRef } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import Video from "react-native-video";

import RasaChat, { Send, InputToolbar, Composer, Actions } from "./RNRasa";

import styles from "./styles";

const HOST = "https://592e-115-99-174-215.ngrok-free.app";

const botAvatar =
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";
const userAvatar =
  "https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";

const ChatScreen = () => {
  const rasaChatRef = useRef(null);

  const resetMessages = () => {
    rasaChatRef?.current?.resetMessages();
  };

  const resetBot = () => {
    rasaChatRef?.current?.resetBot();
  };

  const sendStartConversation = () => {
    rasaChatRef?.current?.sendCustomMessage("Hi");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <RasaChat
          ref={rasaChatRef}
          host={HOST}
          placeholder="Your input placeholder"
          botAvatar={botAvatar}
          userAvatar={userAvatar}
          showUserAvatar
          renderInputToolbar={(props) => (
            <InputToolbar
              {...props}
              containerStyle={styles.InputToolbar}
              primaryStyle={{ alignItems: "center" }}
            />
          )}
          renderActions={(props) => (
            <Actions
              {...props}
              containerStyle={styles.containerActions}
              options={{
                "Start New Conversation": sendStartConversation,
                "Clear messages": resetMessages,
                "Reset Bot": resetBot,
                Cancel: () => {},
              }}
            />
          )}
          renderComposer={(props) => (
            <Composer {...props} textInputStyle={styles.textComposer} />
          )}
          alwaysShowSend
          renderSend={(props) => {
            return (
              <Send
                {...props}
                disabled={!props.text}
                containerStyle={styles.sendContainer}
              >
                <Text style={{ color: !props.text ? "#d6d3d1" : "#2097F3" }}>
                  Send
                </Text>
              </Send>
            );
          }}
          renderMessageVideo={(props) => {
            const { currentMessage } = props;
            return (
              <View style={{ padding: 0 }}>
                <Video
                  source={{ uri: currentMessage?.video }}
                  resizeMode="cover"
                  repeat
                  controls
                  style={styles.backgroundVideo}
                />
              </View>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default ChatScreen;

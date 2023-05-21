import React, {
  useState,
  useCallback,
  useMemo,
  useImperativeHandle,
} from "react";
import {
  GiftedChat,
  Actions,
  Avatar,
  Bubble,
  SystemMessage,
  MessageImage,
  MessageText,
  Composer,
  Day,
  InputToolbar,
  LoadEarlier,
  Message,
  MessageContainer,
  Send,
  Time,
  GiftedAvatar,
  utils,
  Reply,
  BubbleProps,
} from "react-native-gifted-chat";
import {
  createNewBotMessage,
  createBotEmptyMessage,
  fetchOptions,
  createQuickUserReply,
  isValidNotEmptyArray,
} from "./utils";

const RasaChat = React.forwardRef((props, ref) => {
  const {
    host,
    onSendMessFailed,
    onEmptyResponse,
    emptyResponseMessage,
    userId = "UserId1",
    userName = "",
    userAvatar = "",
    botName = "RasaChat",
    botAvatar = "",
    ...giftedChatProp
  } = props;
  const [messages, setMessages] = useState([
    {
      text: "Welcome to Axis Bot",
      createdAt: new Date(),
      user: {
        avatar: botAvatar,
      },
    },
  ]);
  const [lastRasaCustomResponse, setLastRasaCustomResponse] = useState();
  const userData = {
    _id: userId,
    name: userName,
    avatar: userAvatar,
  };
  const botData = {
    _id: "bot_Id_1",
    name: botName,
    avatar: botAvatar,
    text: "Welcome to Axis Bot",
  };

  useImperativeHandle(ref, () => ({
    resetMessages() {
      setMessages([]);
    },
    resetBot() {
      sendMessage("/restart");
    },
    sendCustomMessage(text) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          createQuickUserReply(text, userData),
        ])
      );
      sendMessage(text);
    },
  }));

  const hasLastRasaMessageACheckbox = useMemo(() => {
    if (lastRasaCustomResponse?.custom?.payload?.template_type === "checkbox")
      return true;
    return false;
  }, [lastRasaCustomResponse]);

  const parseMessages = useCallback(
    (messArr) => {
      return (messArr || []).map((singleMess) =>
        createNewBotMessage(singleMess, botData)
      );
    },
    [botData]
  );

  const sendMessage = useCallback(
    async (text) => {
      const rasaMessageObj = {
        message: text,
        sender: `${userId}`,
      };
      console.log("rasaMessageObj", rasaMessageObj);
      try {
        const response = await fetch(`${host}/webhooks/rest/webhook`, {
          ...fetchOptions,
          body: JSON.stringify(rasaMessageObj),
        });
        const messagesJson = await response.json();
        let customMessage = messagesJson?.find((message) =>
          message.hasOwnProperty("custom")
        );
        const newRecivieMess = parseMessages(messagesJson);
        if (!isValidNotEmptyArray(newRecivieMess)) {
          onEmptyResponse && onEmptyResponse();
          if (emptyResponseMessage) {
            const emptyMessageReceive = createBotEmptyMessage(
              emptyResponseMessage,
              botData
            );
            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, [emptyMessageReceive])
            );
          }
          return;
        }
        setLastRasaCustomResponse(customMessage);
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newRecivieMess.reverse())
        );
      } catch (error) {
        onSendMessFailed && onSendMessFailed(error);
      }
    },
    [
      parseMessages,
      host,
      onSendMessFailed,
      onEmptyResponse,
      emptyResponseMessage,
    ]
  );

  const onSend = useCallback(
    (messages = []) => {
      const { text: userText2Rasa = "" } = messages[0] ?? {};
      sendMessage(userText2Rasa);
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [sendMessage]
  );

  const onQuickReply = useCallback(
    (replies) => {
      let quickMessage = [];
      let userText2Rasa = "";
      if (replies.length <= 1 && !hasLastRasaMessageACheckbox) {
        const { value = "", title = "" } = replies[0] ?? {};
        quickMessage = [createQuickUserReply(title, userData)];
        userText2Rasa = value;
      } else {
        quickMessage = [
          ...replies.map((reply) =>
            createQuickUserReply(reply.title, userData)
          ),
        ];
        const checkboxOptions = replies.map((reply) => reply.value);
        const { payload = "/custom_intent", slot = "custom_slot" } =
          lastRasaCustomResponse?.custom?.payload ?? {};
        const newPayload = JSON.stringify({ [slot]: checkboxOptions });
        userText2Rasa = `${payload}${newPayload}`;
      }
      sendMessage(userText2Rasa);
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, quickMessage.reverse())
      );
    },
    [userAvatar, sendMessage]
  );

  return (
    <GiftedChat
      user={userData}
      onSend={(mess) => onSend(mess)}
      messages={messages}
      onQuickReply={onQuickReply}
      {...giftedChatProp}
      renderBubble={(props) => {
        return (
          <Bubble
            {...props}
            textStyle={{
              right: {
                color: "white",
              },
              left: {
                color: "#24204F",
              },
            }}
            wrapperStyle={{
              left: {
                backgroundColor: "#white",
                border: "solid",
                borderWidth: 1,
              },
              right: {
                backgroundColor: "#993dbb",
              },
            }}
          />
        );
      }}
    />
  );
});

export default RasaChat;
export {
  Actions,
  Avatar,
  Bubble,
  SystemMessage,
  MessageImage,
  MessageText,
  Composer,
  Day,
  InputToolbar,
  LoadEarlier,
  Message,
  MessageContainer,
  Send,
  Time,
  GiftedAvatar,
  utils,
  Reply,
};

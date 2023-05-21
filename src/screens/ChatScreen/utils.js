import { v4 as uuidv4 } from "uuid";

export { uuidv4 };

export const createNewBotMessage = (botMessageObj, botData) => {
  const { custom, buttons, text = "", image = "" } = botMessageObj;
  let quickReplies = {
    type: "radio",
    keepIt: false,
    values: [],
  };
  let video = "";
  if (custom?.type === "video") video = custom.url;

  if (buttons && buttons.length > 0) {
    quickReplies.values = buttons.map((button) => ({
      title: button.title,
      value: button.payload,
    }));
  } else {
    if (custom) {
      quickReplies.type = custom?.payload?.template_type ?? "radio";
      quickReplies.values =
        custom?.payload?.buttons?.map((button) => ({
          title: button.title,
          value: button.payload,
        })) ?? [];
    }
  }

  return {
    createdAt: new Date(),
    _id: uuidv4(),
    user: botData,
    text,
    image,
    quickReplies,
    video,
  };
};

export const createBotEmptyMessage = (emptyMessage, botData) => {
  return {
    createdAt: new Date(),
    _id: uuidv4(),
    user: botData,
    text: emptyMessage,
  };
};

export const createQuickUserReply = (text, userData) => {
  return {
    createdAt: new Date(),
    _id: uuidv4(),
    user: userData,
    text,
  };
};

export const fetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const isValidNotEmptyArray = (array) => {
  return array && Array.isArray(array) && array.length > 0;
};

import { Box } from "@chakra-ui/react";
import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import  MessageBox  from "./MessageBox";
import hide from "./hide.module.css"

const ChatfeedProps = {
  messages: [{
    message: {
    text: "test",
    sender: "sean",
    createdAt: Date.now(),
  },
  key: 1
  }, {
    message: {
    text: "More Testing",
    sender: "Jacob",
    createdAt: Date.now(),
  },
  key: 2
  }, {
    message: {
    text: "TESTING 3",
    sender: "Josh",
    createdAt: Date.now(),
  },
  key: 3
  }, {
    message: {
    text: "asetahes;lthaesltkh;aes",
    sender: "Omar",
    createdAt: Date.now(),
  },
  key: 4
  }, {
    message: {
    text: "Hello",
    sender: "sean",
    createdAt: Date.now(),
  },
  key: 5
  }, {
    message: {
    text: "these are words here yes",
    sender: "anotherperson",
    createdAt: Date.now(),
  },
  key: 6
  }, {
    message: {
    text: "ajsketgasletaest",
    sender: "HUMAN",
    createdAt: Date.now(),
  },
  key: 7
  }, {
    message: {
    text: "as;kthalsehtl;aeskh;tlykhas;lkyhals;khy",
    sender: "ROBOT",
    createdAt: Date.now(),
  },
  key: 8
  }, {
    message: {
    text: "Hello again",
    sender: "sean",
    createdAt: Date.now(),
  },
  key: 9
  }], // message query
  me: "sean"
};

const ChatFeed = ({
  messages = ChatfeedProps.messages,
  me = ChatfeedProps.me
}) => {
  console.log(messages)
  console.log(me)
  return (
    <ScrollableFeed className={hide.hideScroll}>
      <Box p={6}>
        {messages?.map((message, key) => (
          <MessageBox
            message={message}
            isMine={me === message.message.sender}
            key={key}
          />
        ))}
      </Box>
    </ScrollableFeed>
  );
};

export default ChatFeed;

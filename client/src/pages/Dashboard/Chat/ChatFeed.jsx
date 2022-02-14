import { Box } from "@chakra-ui/react";
import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import  MessageBox  from "./MessageBox";
import hide from "./hide.module.css"



const ChatFeed = ({
  messages,
  me
}) => {
  console.log(messages)
  console.log(me)
  return (
    <ScrollableFeed className={hide.hideScroll}>
      <Box p={6}>
        {messages?.map((message, key) => (
          <MessageBox
            message={message}
            isMine={me === message.createdBy}
            key={key}
          />
        ))}
      </Box>
    </ScrollableFeed>
  );
};

export default ChatFeed;

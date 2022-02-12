import { Box } from "@chakra-ui/core";
import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { MessageBox } from "./MessageBox";
import misc from "../styles/misc.module.css";

const ChatfeedProps = {
  messages: {}, // message query
  me: "sean"
};

const Chatfeed = ({
  me,
  messages,
}) => {
  return (
    <ScrollableFeed className={misc.hideScroll}>
      <Box p={6}>
        {messages?.map((message) => (
          <MessageBox
            message={message}
            isMine={me?.me?.user?.username === message.sender}
            isUnsent={false}
            key={key}
          />
        ))}
        {unsentMessages?.map((message) => (
          <MessageBox
            message={message}
            isMine={me?.me?.user?.username === message.sender}
            isUnsent={true}
            key={key}
          />
        ))}
      </Box>
    </ScrollableFeed>
  );
};

export default Chatfeed;

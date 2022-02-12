import { Flex } from "@chakra-ui/react";
import ChatFeed from "./ChatFeed"
import React from "react";

const ChatContainer = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      position="relative"
      minHeight="50vh"
      bgColor="cyan.500"
    >
      < ChatFeed />
    </Flex>
  );
};

export default ChatContainer
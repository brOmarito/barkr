import { Flex } from "@chakra-ui/react";
import Chat from "./Chat"
import React from "react";
import ChatList from "./ChatList";

const ChatContainer = () => {
  return (
    <Flex
      flex={3}
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      position="relative"
      minHeight="50vh"
      bgColor="gray.50"
    >
    < Chat />
    </Flex>

);
};

export default ChatContainer

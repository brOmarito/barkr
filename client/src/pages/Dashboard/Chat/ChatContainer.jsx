import { Flex } from "@chakra-ui/react";
import MessageBox from "./MessageBox";
import React from "react";

const ChatContainer = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      minHeight="100vh"
      bg="_hoveredPurple"
    >
      < MessageBox />
    </Flex>
  );
};

export default ChatContainer
import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import ChatFeed from "./ChatFeed";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CHAT } from '../../../utils/queries';
import { ADD_MESSAGE } from '../../../utils/mutations';
import Auth from "../../../utils/auth"
import moment from "moment";
import { useChatRoomContext } from "../../../utils/GlobalState";


const Chat = (props) => {
  const me = Auth.getProfile().data.username
  const { chatRoom, changeRoom, getRoom, defaultroom } = useChatRoomContext()
  getRoom()
  const { loading, data } = useQuery(QUERY_CHAT, {
    variables: {chatId: chatRoom},
    pollInterval: 500
  })
  const [addMessage, {data2, loading2, error2}] = useMutation(ADD_MESSAGE);
  const [messages, setMessages] = useState();
  

  useEffect(() => {
    if (!loading && data.getChat != null) {
      setMessages(data.getChat.messages);
    }
  }, [loading, data]);



  const sendMessage = async (input) => {
    const createdBy = me,
          createdAt = moment().format("hh:mm A MMM Do")

    if (createdBy) {
      await addMessage({
        variables: {
          text: input,
          createdBy,
          createdAt,
          chatId: chatRoom
        },
      });
    }
  };
 

  if (messages) {
    return (
      <Flex
        w="100%"
        maxW={1200}
        height="80vh"
        maxHeight="calc(100vh - 2rem)"
        flexDirection="column"
        px={8}
        mt={10}
      >
        <Box
          maxHeight="100%"
          height="100%"
          bg="gray.200"
          pb={20}
          borderRadius={12}
          overflow="hidden"
          boxShadow="0 2px 2px #0f0f0f04"
        >
          <ChatFeed
            me={me}
            messages={messages}
          />
          <Flex px={4} height={20} alignItems="center">
            <Input
              placeholder="Type a message"
              size="lg"
              bg="white"
              _focus={{
                outline: "none",
              }}
              onKeyPress={(event) => {
                const value = event.currentTarget.value;
                if (
                  event.key === "Enter" &&
                  value.trim().length > 0 
      
                ) {
                  sendMessage(event.currentTarget.value);
                  event.currentTarget.value = "";
                }
              }}
            />
          </Flex>
        </Box>
      </Flex>
    );
  } else {
    return null;
  }
};


export default Chat;

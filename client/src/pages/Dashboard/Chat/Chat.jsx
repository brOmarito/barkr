import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChatFeed from "./ChatFeed";
import { useQuery } from '@apollo/client';
import { QUERY_CHAT } from '../../../utils/queries';
import Auth from "../../../utils/auth"


const Chat = () => {
  const me = Auth.getProfile().data.username
  const { loading, data } = useQuery(QUERY_CHAT, {
    variables: {chatId: 'testroom'}
  })
  const [messages, setMessages] = useState();

  // const { data } = useMessagesQuery();
  // const { data: newMessage } = useNewMessageSubscription();
  // const [sendMessage] = useSendMessageMutation({});

  useEffect(() => {
    if (!loading && data) {
      setMessages(data.getChat.messages);
    }
  }, [loading, data]);



  // const emitMessage = async (input) => {
  //   const createdBy = me?.me.username;

  //   if (createdBy) {
  //     await sendMessage({
  //       variables: {
  //         text: input,
  //         createdBy,
  //       },
  //     });
  //   }
  // };

  // const ChatfeedProps = {
  //   messages: [{
  //     message: {
  //     text: "test",
  //     createdBy: "sean",
  //     createdAt: Date.now(),
  //   },
  //   key: 1
  //   }, {
  //     message: {
  //     text: "More Testing",
  //     createdBy: "Jacob",
  //     createdAt: Date.now(),
  //   },
  //   key: 2
  //   }, {
  //     message: {
  //     text: "TESTING 3",
  //     createdBy: "Josh",
  //     createdAt: Date.now(),
  //   },
  //   key: 3
  //   }, {
  //     message: {
  //     text: "asetahes;lthaesltkh;aes",
  //     createdBy: "Omar",
  //     createdAt: Date.now(),
  //   },
  //   key: 4
  //   }, {
  //     message: {
  //     text: "Hello",
  //     createdBy: "sean",
  //     createdAt: Date.now(),
  //   },
  //   key: 5
  //   }, {
  //     message: {
  //     text: "these are words here yes",
  //     createdBy: "anotherperson",
  //     createdAt: Date.now(),
  //   },
  //   key: 6
  //   }, {
  //     message: {
  //     text: "ajsketgasletaest",
  //     createdBy: "HUMAN",
  //     createdAt: Date.now(),
  //   },
  //   key: 7
  //   }, {
  //     message: {
  //     text: "as;kthalsehtl;aeskh;tlykhas;lkyhals;khy",
  //     createdBy: "ROBOT",
  //     createdAt: Date.now(),
  //   },
  //   key: 8
  //   }, {
  //     message: {
  //     text: "Hello again",
  //     createdBy: "sean",
  //     createdAt: Date.now(),
  //   },
  //   key: 9
  //   }, {
  //     message: {
  //     text: "asaseraslfjdaser",
  //     createdBy: "sean",
  //     createdAt: Date.now(),
  //   },
  //   key: 9
  //   }, {
  //     message: {
  //     text: "asaseraslfjdaser",
  //     createdBy: "not me",
  //     createdAt: Date.now(),
  //   },
  //   key: 9
  //   }, {
  //     message: {
  //     text: "asaseraslfjdaser",
  //     createdBy: "sean",
  //     createdAt: Date.now(),
  //   },
  //   key: 9
  //   }, {
  //     message: {
  //     text: "asaseraslfjdaser",
  //     createdBy: "sean",
  //     createdAt: Date.now(),
  //   },
  //   key: 9
  //   }, {
  //     message: {
  //     text: "asaseraslfjdaser",
  //     createdBy: "sean",
  //     createdAt: Date.now(),
  //   },
  //   key: 9
  //   }, {
  //     message: {
  //     text: "asaseraslfjdaser",
  //     createdBy: "not me",
  //     createdAt: Date.now(),
  //   },
  //   key: 9}], // message query
  //   me: "sean"
  // };

 

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
              // onKeyPress={(event) => {
              //   const value = event.currentTarget.value;
              //   if (
              //     event.key === "Enter" &&
              //     value.trim().length > 0 
      
              //   ) {
              //     emitMessage(event.currentTarget.value);
              //     event.currentTarget.value = "";
              //   }
              // }}
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

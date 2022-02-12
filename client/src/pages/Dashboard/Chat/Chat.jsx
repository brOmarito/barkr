import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChatFeed from "./ChatFeed";
// import {
//   useMessagesQuery,
//   useNewMessageSubscription,
//   useSendMessageMutation,
// } from "../generated/types.d";

const Chat = () => {
  // const me = isAuth();

  // const { data } = useMessagesQuery();
  // const { data: newMessage } = useNewMessageSubscription();
  // const [messages, setMessages] = useState();
  // const [sendMessage] = useSendMessageMutation({});

  // useEffect(() => {
  //   if (data?.messages) {
  //     setMessages(data.messages);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (data && messages && newMessage) {
  //     setMessages([...messages, newMessage?.newMessage]);
  //   }
  //   return
  // }, [newMessage]);

  // const emitMessage = async (input) => {
  //   const sender = me?.me.username;

  //   if (sender) {
  //     await sendMessage({
  //       variables: {
  //         text: input,
  //         sender,
  //       },
  //     });
  //   }
  // };

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
    }, {
      message: {
      text: "asaseraslfjdaser",
      sender: "sean",
      createdAt: Date.now(),
    },
    key: 9
    }, {
      message: {
      text: "asaseraslfjdaser",
      sender: "not me",
      createdAt: Date.now(),
    },
    key: 9
    }, {
      message: {
      text: "asaseraslfjdaser",
      sender: "sean",
      createdAt: Date.now(),
    },
    key: 9
    }, {
      message: {
      text: "asaseraslfjdaser",
      sender: "sean",
      createdAt: Date.now(),
    },
    key: 9
    }, {
      message: {
      text: "asaseraslfjdaser",
      sender: "sean",
      createdAt: Date.now(),
    },
    key: 9
    }, {
      message: {
      text: "asaseraslfjdaser",
      sender: "not me",
      createdAt: Date.now(),
    },
    key: 9}], // message query
    me: "sean"
  };

  const messages = ChatfeedProps.messages,
        me = ChatfeedProps.me

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

// export const getStaticProps = async () => {};

export default Chat;

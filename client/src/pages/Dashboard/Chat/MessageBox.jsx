import { Flex, Tag, Text } from '@chakra-ui/react'
import moment from "moment";

const MessageBox = (props) => {

  const {message, isMine} = props
  console.log(message)
  
  return (
    <Flex my={2} p={2}>
    <Flex flexDirection="column" width="100%">
      <Tag
        variant="subtle"
        mb={2}
        bg={isMine ? "green.600" : "gray.500"}
        color="white"
        ml={isMine ? "auto" : undefined}
        mr={isMine ? undefined : "auto"}
      >
        {message?.createdBy}
      </Tag>
      <Flex
        bg="gray.50"
        pr={2}
        py={2}
        pl={4}
        borderRadius={12}
        boxShadow="0 2px 2px #0f0f0f0f"
        ml={isMine ? "auto" : undefined}
        mr={isMine ? undefined : "auto"}
      >
        <Text fontSize={15} maxWidth={400}>
          {message?.text}
        </Text>
        <Flex
          ml="auto"
          mt="auto"
          pl={4}
          alignItems="center"
          justifyContent="flex-end"
        >
       <Text fontSize={12} color="gray.500">
          {moment(message?.createdAt).format("hh:mm A")}
       </Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default MessageBox

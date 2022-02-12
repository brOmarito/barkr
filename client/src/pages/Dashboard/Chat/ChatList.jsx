import { 
  Flex, 
  Box,
  Avatar,
  Text,
  Badge
 } from '@chakra-ui/react'

const ChatList = () => {
  return (
    <Flex flex='1' justifyContent='start' alignItems='center' flexDirection='column' borderLeft="1px" borderLeftColor="#EDF2F7" pt={2}>

      <Flex p={2} w="full" border="1px" borderColor="#EDF2F7">
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Segun Adebayo
            <Badge ml='1' colorScheme='green'>
              New
            </Badge>
          </Text>
          <Text fontSize='sm'>UI Engineer</Text>
        </Box>
      </Flex>

      <Flex p={2} w="full" border="1px" borderColor="#EDF2F7">
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Segun Adebayo
            <Badge ml='1' colorScheme='green'>
              New
            </Badge>
          </Text>
          <Text fontSize='sm'>UI Engineer</Text>
        </Box>
      </Flex>
      
      <Flex p={2} w="full" border="1px" borderColor="#EDF2F7">
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Segun Adebayo
            <Badge ml='1' colorScheme='green'>
              New
            </Badge>
          </Text>
          <Text fontSize='sm'>UI Engineer</Text>
        </Box>
      </Flex>

    </Flex>
  )
}

export default ChatList
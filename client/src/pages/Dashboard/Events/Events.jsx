import { 
  Flex, 
  Box, 
  Text,
  Heading 
} from '@chakra-ui/react'

const EventsContainer = () => {
  return (
    <Flex flex='4' justifyContent='center' alignItems='center' flexDirection='column'>
      <Heading>Coming soon...</Heading>
      <Text color='gray.500'>Check back in for events in your area!</Text>
    </Flex>
  )
}

export default EventsContainer
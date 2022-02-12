import {
  Flex,
  Box,
  Container,
  Heading,
  Text
} from '@chakra-ui/react'
import SocialProfileSimple from './ProfileCard'

const ExploreContainer = () => {
  return (
    <Flex flex='3' flexDirection='column' alignItems='center' mt={2}>
      <Heading>Explore</Heading>
      <Text>Time to make some dog friends</Text>
      <Flex flex='3' justifyContent='space-evenly' flexWrap="wrap">
        <SocialProfileSimple />
        <SocialProfileSimple />
        <SocialProfileSimple />
        <SocialProfileSimple />
        <SocialProfileSimple />
        <SocialProfileSimple />
        </Flex>
      </Flex>
      )
}

      export default ExploreContainer
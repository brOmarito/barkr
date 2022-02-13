import {
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
import ProfileCard from './ProfileCard'

const ExploreContainer = ({ clickHandler }) => {
  return (
    <Flex flex='3' flexDirection='column' alignItems='center' mt={2}>
      <Heading>Explore</Heading>
      <Text>Time to make some dog friends</Text>
      <Flex flex='3' justifyContent='space-evenly' flexWrap="wrap">
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
        <ProfileCard clickHandler={clickHandler} />
      </Flex>
    </Flex>
  )
}

export default ExploreContainer
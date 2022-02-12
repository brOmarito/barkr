import { Flex, Box } from '@chakra-ui/react'
import SocialProfileSimple from './ProfileCard'

const ExploreContainer = () => {
  return (
    <Flex flex='3' justifyContent='space-evenly' flexWrap="wrap">
      <SocialProfileSimple/>
      <SocialProfileSimple/>
      <SocialProfileSimple/>
      <SocialProfileSimple/>
      <SocialProfileSimple/>
      <SocialProfileSimple/>
    </Flex>
  )
}

export default ExploreContainer
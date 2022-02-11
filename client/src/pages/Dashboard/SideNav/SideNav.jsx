import {
  Flex,
  Box,
  VStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <Flex flex='1' justifyContent='center'>
      <VStack>
        <VStack>

        </VStack>
        <VStack>
          <Link to="/profile">
            Edit Profile
          </Link>
          <Link to="/explore">
          Explore
          </Link>
          <Link to="/chat">
          Messages
          </Link>
          <Link>
          Events
          </Link>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default SideNav
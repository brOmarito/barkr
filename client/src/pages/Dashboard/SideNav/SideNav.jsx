import {
  Link,
  Flex,
  Box,
  VStack
} from '@chakra-ui/react'

const SideNav = () => {
  return (
    <Flex flex='1' justifyContent='center'>
      <VStack>
        <VStack>

        </VStack>
        <VStack>
          <Link>
            Edit Profile
          </Link>
          <Link>
          Explore
          </Link>
          <Link>
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
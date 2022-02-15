import {
  Flex,
  Box,
  VStack,
  Image,
  Text,
  Heading
} from '@chakra-ui/react'
import { LinkItems } from '../../../utils/navLinks';
import { NavItem } from './NavItem';

const SideNav = (props) => {
  const { city, dogName, state, dogDescription, image} = props.userInfo

  console.log(props.userInfo)

  return (
    <Flex flex='1' justifyContent='center' pt={4} borderRight="1px" borderRightColor="#EDF2F7" display={{ base: 'none', md: 'block' }}>
      <VStack>
        <VStack minW="100%" mb={3}>
          <Box display='flex' mb={3} flex='1' flexDirection="column" alignContent="center" justifyContent="center">
            <Image maxW="150px" src={image} objectFit="contain" borderRadius="full" alt='Dog'/>
          </Box>
          <Heading size='md' align="center" maxW="60%">Hello, {dogName}! </Heading>
          <Text noOfLines={3} align="center" fontSize='xl' maxW="60%">{dogDescription} </Text>
          <Text align="center" maxW="60%" color='#808080'> {city}, {state}</Text>
        </VStack>
        <VStack minW="100%" alignItems="end" overflow="hidden">
          {LinkItems.map((link) => (
            <NavItem minW="100%" key={link.name} icon={link.icon} to={link.to} onClick={()=>props.clickHandler(link.to)}>
              {link.name}
            </NavItem>
          ))}
        </VStack>
      </VStack>
    </Flex>
  )
}



export default SideNav
import {
  Icon,
  Flex,
  Box,
  VStack,
  Image,
  Text,
  Heading

} from '@chakra-ui/react'
import {
  FiHome,
  FiCompass,
  FiCalendar,
  FiMail

} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LinkItems = [
  { name: 'Profile', icon: FiHome, to: "profile" },
  { name: 'Explore', icon: FiCompass, to: "explore" },
  { name: 'Messages', icon: FiMail, to: "chat" },
  { name: 'Events', icon: FiCalendar, to: "events" },
];

const NavItem = ({ icon, to, children, ...rest }) => {
  return (
    <Link width="100%" href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
          {children}
        {icon && (
          <Icon
            ml="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
      </Flex>
   </Link>
  );
};

const SideNav = (props) => {

  
  const { city, dogName, state, dogDescription, image} = props.userInfo

  return (
    <Flex flex='1' justifyContent='center' pt={4} borderRight="1px" borderRightColor="#EDF2F7">
      <VStack>
        <VStack minW="100%" mb={3}>
          <Box display='flex' mb={3} flex='1' flexDirection="column" alignContent="center" justifyContent="center">
            <Image maxW="150px" src='https://bit.ly/dan-abramov' objectFit="contain" borderRadius="full" alt='Dan Abramov'/>
          </Box>
          <Heading size='md' align="center" maxW="60%">Hello, {dogName}! </Heading>
          <Text align="center" fontSize='xl' maxW="60%">{dogDescription} </Text>
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
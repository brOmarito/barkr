import {
  Icon,
  Flex,
  Box,
  VStack,
  Image,
  Text

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
    // <Link width="100%" href='#' to={to} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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
    // </Link>
  );
};

const SideNav = (props) => {
  return (
    <Flex flex='1' justifyContent='center' pt={4} borderRight="1px" borderRightColor="#EDF2F7">
      <VStack>
        <VStack minW="100%" mb={3}>
          <Box display='flex' flex='1' flexDirection="column" alignContent="center" justifyContent="center">
            <Image maxW="150px" src='https://bit.ly/dan-abramov' objectFit="contain" borderRadius="full" alt='Dan Abramov'/>
          </Box>
          <Text align="center" maxW="60%"> Some random info about your dog and what not</Text>
        </VStack>
        <VStack minW="100%" alignItems="end">
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
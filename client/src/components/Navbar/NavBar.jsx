import React from 'react'
import {
  Heading,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Auth from '../../utils/auth';
import { LinkItems } from '../../utils/navLinks';
import { NavItem } from '../../pages/Dashboard/SideNav/NavItem';

const NavBar = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading color='grey.800' ml={{base: '2rem', md: 'none'}} >
              barkr
              </Heading>
            
              </Box>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <Button  
              colorScheme='blue'
              onClick={() => Auth.logout()}
              size='sm'
              >
                Logout

              </Button>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} to={link.to} onClick={()=>props.clickHandler(link.to)}>{link.name}</NavItem>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;


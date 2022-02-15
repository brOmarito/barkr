import {
    Icon,
    Flex,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export const NavItem = ({ icon, to, children, ...rest }) => {
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
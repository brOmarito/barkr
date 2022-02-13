import {
    Flex,
    Image,
    Box,
    Stack,
    useColorModeValue,
    Heading,
    Text,
  } from '@chakra-ui/react'
  import './profile.css';

  const EditProfileForm = () => {
    return (
      <Flex flex='3' justifyContent='center'>
        <Box
          maxW='100%'
          bg={useColorModeValue('white', 'gray.700')}
          p={8}>
          <Stack spacing={4} minW='100%'>
            <Box boxSize='sm' display='flex' flex='1' flexDirection="column" alignItems="center" justifyContent="center">
                <Heading as='h1' size='xl' marginBottom='.5em'>Profile Name</Heading>
                <Image src='https://bit.ly/dan-abramov' objectFit="contain" alt='Dan Abramov' />
                <Box boxSize='sm' display='flex' flex='1' flexDirection="column" alignItems="flex-start" justifyContent="center" padding='2em'>
                    <Text><span className='bolded-text'>Breed:</span> Standard Poodle</Text>
                    <Box boxSize='sm' display='flex' flex='1' flexDirection="row">
                        <Text><span className='bolded-text'>City:</span> Atlanta</Text>
                        <Text marginLeft='1em'><span className='bolded-text'>State:</span> GA</Text>
                    </Box>
                    <Text><span className='bolded-text'>About the Owner:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text><span className='bolded-text'>About the Dog:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </Box>
            </Box>
          </Stack>
        </Box>
      </Flex>
    )
  }

  export default EditProfileForm
import {
  Flex,
  Avatar,
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  VStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react'

import { useMutation } from '@apollo/client';
// import { CREATE_USER } from '../utils/mutations';
import { useFormik } from 'formik';


const EditProfileForm = () => {

  const formik = useFormik({
    initialValues: {
      bio: "",
      dogBreed: "",
      dogDescription: "",
      lookingForLove: "",
      lookForFriends: "",
      location: "",
      userId: "",
      image: "",
      link: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values)

      } catch (err) {

      }

    }
  })

  return (
    <Flex flex='2' justifyContent='center'>
      <Box
        minW='100%'
        bg={useColorModeValue('white', 'gray.700')}
        p={8}>
        <Stack spacing={4} minW='100%'>
          <form onSubmit={formik.handleSubmit}>
            <HStack display='flex'>
              <VStack flex='1' >
                <Box>
                  <FormControl >
                    <FormLabel>Name</FormLabel>
                    <Input
                      id="name"
                      type="text"
                      name='name'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="breed" >
                    <FormLabel>Breed</FormLabel>
                    <Input
                      id="breed"
                      name='breed'
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="location" >
                    <FormLabel>Location</FormLabel>
                    <Input
                      id="location"
                      name='location'
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <HStack>
                    <Checkbox>Looking for Love? </Checkbox>
                    <Checkbox>Looking for Friends? </Checkbox>
                  </HStack>
                </Box>
              </VStack>

              <Box boxSize='sm' display='flex' flex='1'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
            </HStack>
            <FormControl id="bio">
              <FormLabel>About the Owner</FormLabel>
              <Textarea
                id="username"
                name='username'
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>About the Dog</FormLabel>
              <Textarea
                type="email"
                id="email"
                name='email'
                size='sm'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                type="submit"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Update Profile
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Flex>
  )
}

export default EditProfileForm
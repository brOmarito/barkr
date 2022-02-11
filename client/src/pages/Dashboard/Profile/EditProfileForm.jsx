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

import Auth from '../../../utils/auth'
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { UPDATE_PROFILE } from '../../../utils/mutations'


const EditProfileForm = () => {
  const [updateProfile, { error }] = useMutation(UPDATE_PROFILE);

  const formik = useFormik({
    initialValues: {
      bio: "",
      dogName: "",
      dogBreed: "",
      dogDescription: "",
      lookingForLove: false,
      lookForFriends: false,
      city: "",
      state: "",
      userId: Auth.getProfile().data._id,
      image: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values)
        const { data } = await updateProfile({
          variables: {...values}
        })

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
                      id="dogName"
                      type="text"
                      name='dogName'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.dogName}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>Breed</FormLabel>
                    <Input
                      id="dogBreed"
                      name='dogBreed'
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.dogBreed}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input
                      id="city"
                      name='city'
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel>State</FormLabel>
                    <Input
                      id="state"
                      name='state'
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.state}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <HStack>
                    <Checkbox
                      type='checkbox'
                      name='lookingForLove'
                      id='lookingForLove'
                      // value={formik.values.lookingForLove}
                    >
                      Looking for Love?
                    </Checkbox>
                    <Checkbox
                      type='checkbox'
                      name='lookingForFriends'
                      id='lookingForFriends'
                    >
                      Looking for Friends?
                    </Checkbox>
                  </HStack>
                </Box>
              </VStack>

              <Box boxSize='sm' display='flex' flex='1'>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
            </HStack>
            <FormControl>
              <FormLabel>About the Owner</FormLabel>
              <Textarea
                id="bio"
                name='bio'
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bio}
              />
            </FormControl>
            <FormControl>
              <FormLabel>About the Dog</FormLabel>
              <Textarea
                type="text"
                id="dogDescription"
                name='dogDescription'
                size='sm'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dogDescription}
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
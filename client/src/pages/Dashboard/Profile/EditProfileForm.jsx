import {
  Flex,
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  VStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
  Checkbox,
  Select

} from '@chakra-ui/react'

import Auth from '../../../utils/auth'

import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { useFormik, Formik, Form, Field } from 'formik';

import { UPDATE_PROFILE } from '../../../utils/mutations'
import { QUERY_SINGLE_PROFILE } from '../../../utils/queries';

import { stateAbbreviations } from './stateAbbreviations'

import { useEffect, useState } from 'react'

const EditProfileForm = ({ initialValues }) => {

  const {
    bio,
    dogName,
    dogBreed,
    dogDescription,
    lookingForFriends,
    lookingForLove,
    city,
    state,
    image
  } = initialValues

  const [updateProfile, { error: updateError }] = useMutation(UPDATE_PROFILE);

  const formik = useFormik({
    initialValues: {
      bio: bio,
      dogName: dogName,
      dogBreed: dogBreed,
      dogDescription: dogDescription,
      lookingForLove: lookingForLove,
      lookingForFriends: lookingForFriends,
      city: city,
      state: state,
      userId: Auth.getProfile().data._id,
      image: image,
    },

    onSubmit: async (values) => {
      try {
        console.log(values)

        const { data } = await updateProfile({
          variables: { ...values }
        })

        window.location.reload()

      } catch (err) {

      }

    }
  })

  return (
    <Flex flex='3' justifyContent='center'>
      <Box
        minW='100%'
        bg={useColorModeValue('white', 'gray.700')}
        p={8}>
        <Stack spacing={4} minW='100%'>
          <form onSubmit={formik.handleSubmit}>
            <HStack display='flex'>
              <VStack flex='1' alignItems="start" >
                <Box width="100%">
                  <FormControl>
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
                <Box width="100%">
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
                <Flex minW='100%' justifyContent='space-between'>
                  <Box width="100%" mr={2}>
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
                  <Box width="100%">
                    <FormControl>
                      <FormLabel>State</FormLabel>
                      <Select
                        placeholder='Select State'
                        as="select"
                        name="state"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.state}
                      >
                        {stateAbbreviations.map((state) => {
                          return (
                            <option value={state} key={state}>{state}</option>
                          )
                        })}

                      </Select>
                    </FormControl>
                  </Box>
                </Flex>
                <Box>
                  <HStack display='flex' minW='100%' justifyContent='space-between'>
                    <Checkbox
                      isChecked={formik.values.lookingForLove ? true : false}
                      type='checkbox'
                      name='lookingForLove'
                      id='lookingForLove'
                      onChange={formik.handleChange}
                    >
                      Looking for Love?
                    </Checkbox>
                    <Checkbox
                      isChecked={formik.values.lookingForFriends ? true : false}
                      type='checkbox'
                      name='lookingForFriends'
                      id='lookingForFriends'
                      onChange={formik.handleChange}
                    >
                      Looking for Friends?
                    </Checkbox>
                  </HStack>
                </Box>
              </VStack>

              <Box boxSize='sm' display='flex' flex='1' flexDirection="column" alignItems="center" justifyContent="center">
                <Image src='https://res.cloudinary.com/dkmlyifpy/image/upload/v1644773751/photo-1644187689076-37b6126afada_vwajd2.jpg' objectFit="contain" alt='Dan Abramov' />
                <Link>Edit Profile Picture</Link>
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
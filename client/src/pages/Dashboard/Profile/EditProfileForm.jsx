import {
  Flex,
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  Checkbox,
  Select

} from '@chakra-ui/react'
import PictureUpload from './PictureUpload'
import Auth from '../../../utils/auth'
import { useMutation } from '@apollo/client';
import { useFormik, Formik, Form, Field } from 'formik';
import { UPDATE_PROFILE } from '../../../utils/mutations'
import { stateAbbreviations } from './stateAbbreviations'

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

        alert('Your profile has been updated!')

        window.location.reload()

      } catch (err) {

      }

    }
  })

  return (
    <Flex flex='4' maxW='100%' justifyContent='center' >
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        maxW='100%'
        >
        <Heading align='center' >Profile</Heading>
        <Text align='center'>Tell the world about yourself!</Text>
        <Stack spacing={4} mt={2} minW='100%'>
          <form onSubmit={formik.handleSubmit}>
            <HStack display='flex' flexWrap='wrap' justifyContent='center'>
              <VStack flex='1' alignItems="start" p={'1rem'}  order={{ base: '1', md: '0' }}>
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

              <Box boxSize='sm' display='flex' flexDirection="column" alignItems="center" justifyContent="center" order={{ base: '0', md: '1' }}>
                <Image src={image} objectFit="scale-down" maxW={'90%'} alt='Your profile picture' />
                <PictureUpload formik={formik} />
              </Box>
            </HStack>
            <VStack p={'1rem'}>
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
            </VStack>
          </form>
        </Stack>
      </Box>
    </Flex>
  )
}

export default EditProfileForm
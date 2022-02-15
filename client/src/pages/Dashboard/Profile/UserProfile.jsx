import {
    Flex,
    Image,
    Box,
    Stack,
    useColorModeValue,
    Heading,
    Text,
    Checkbox,
    CheckboxGroup
  } from '@chakra-ui/react'
  import './profile.css';

  const EditProfileForm = ({profile}) => {
    console.log('Profile:', profile)
    const { bio, dogName, dogBreed, dogDescription, lookingForLove, lookingForFriends, city, state, image } = profile
    return (
      <Flex flex='3' justifyContent='center'>
        <Box
          maxW='100%'
          bg={useColorModeValue('white', 'gray.700')}
          p={{base: 0, md:8}}>
          <Stack spacing={4} minW='100%'>
            <Box boxSize='sm' display='flex' flex='1' flexDirection="column" alignItems="center" justifyContent="center">
                <Heading as='h1' size='xl' marginBottom='.5em'>{dogName}</Heading>
                <Image src={image} objectFit="contain" maxW={'90%'} alt={'Avatar Alt'} fallbackSrc='https://res.cloudinary.com/pariveda-solutions/image/upload/v1644796816/iu_fccg2n.jpg' />
                <Box boxSize='sm' display='flex' flex='1' flexDirection="column" alignItems="flex-start" justifyContent="center" pt='2em' pb='2em'>
                    <Text><span className='bolded-text'>Breed:</span> {dogBreed}</Text>
                    <Box boxSize='sm' display='flex' flex='1' flexDirection="row">
                        <Text><span className='bolded-text'>City:</span> {city}</Text>
                        <Text marginLeft='1em'><span className='bolded-text'>State:</span> {state}</Text>
                    </Box>
                    <Text><span className='bolded-text'>About the Owner:</span> {bio}</Text>
                    <Text><span className='bolded-text'>About the Dog:</span> {dogDescription}</Text>
                    <Checkbox isChecked={lookingForLove} isReadOnly={true}>Looking For Love</Checkbox>
                    <Checkbox isChecked={lookingForFriends} isReadOnly={true}>Looking For Friends</Checkbox>
                </Box>
            </Box>
          </Stack>
        </Box>
      </Flex>
    )
  }

  export default EditProfileForm
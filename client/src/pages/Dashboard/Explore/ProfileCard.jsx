import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Checkbox,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ChatRoomContext } from "../../../utils/GlobalState"

  export default function ProfileCard(props) {
    const { chatRoom, setChatRoomContext } = useContext(ChatRoomContext)
    const { profile, clickHandler } = props
    const { bio, dogName, dogBreed, dogDescription, lookingForLove, lookingForFriends, city, state, image } = profile

    return (
      <Center py={6}>
        <Box
          as='a'
          href='#'
          onClick={() => clickHandler('userProfile', profile)}
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={image}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {dogName}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {dogBreed}
          </Text>
          <Text
            noOfLines={3}
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {dogDescription}
          </Text>
          {lookingForLove ? <Checkbox isChecked={lookingForLove} isReadOnly={true}>Looking For Love</Checkbox> : <></>}
          {lookingForFriends ? <Checkbox isChecked={lookingForFriends} isReadOnly={true}>Looking For Friends</Checkbox> : <></>}
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Message
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }
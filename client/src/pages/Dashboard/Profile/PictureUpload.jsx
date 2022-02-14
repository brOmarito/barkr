import {
  useDisclosure,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'




const PictureUpload = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()



  return (
    <>
      <Button
        variant='link'
        _active={{
          border: 'none',
        }}
        _focus={{
          border: 'none',
        }}
        onClick={onOpen}
      >
        Edit Profile Picture
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Picutre Upload</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type='file'
              variant='unstyled'
            >
            </Input>
          </ModalBody>
          <ModalFooter display='flex' justifyContent='center'>
            <Button align='center' colorScheme='blue' mr={3} onClick={''}>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PictureUpload
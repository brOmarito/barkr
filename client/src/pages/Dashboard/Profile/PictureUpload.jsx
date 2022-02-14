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

  function uploadFile() {
    console.log('within pic upload')
    myWidget.open()
  }

  let myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'dkmlyifpy', 
    uploadPreset: 'mejphwzm'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )

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
        onClick={uploadFile}
      >
        Edit Profile Picture
      </Button>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Picture Upload</ModalHeader>
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
      </Modal> */}
    </>
  )
}

export default PictureUpload
import {  Button, } from '@chakra-ui/react'

const PictureUpload = ({ formik }) => {
  function uploadFile() {
    console.log('within pic upload')
    myWidget.open()
  }

  // Create Cloudinary widget for upload
  let myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'dkmlyifpy',
    uploadPreset: 'mejphwzm'},
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        formik.values.image = result.info.url;
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
    </>
  )
}

export default PictureUpload
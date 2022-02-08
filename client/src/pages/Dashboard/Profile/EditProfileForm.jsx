import { Flex, Box } from '@chakra-ui/react'
import { useMutation } from '@apollo/client';
// import { CREATE_USER } from '../utils/mutations';
import { useFormik } from 'formik';

const EditProfileForm = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values)
        // const { data } = await updateProfile({
        //   variables: { ...values },
        // })

        
      } catch (err) {
        
      }

  }
})

  return (
    <Flex flex='2' justifyContent='center'>
      Edit Profile Form
    </Flex>
  )
}

export default EditProfileForm
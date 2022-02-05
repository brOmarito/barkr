import { Container, Box } from '@chakra-ui/react'
import NavBar from '../../components/Navbar/NavBar';

const Dashboard = () => {
  return (
    <Container minW='100vw' minH='100vh' p={0}>
      <NavBar />
      <Container>
      <Box padding='4' bg='gray.100' maxW='3xl' >
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team.
      </Box>
      </Container>
    </Container>
  )
}

export default Dashboard;
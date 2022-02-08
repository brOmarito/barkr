import { Container, Box } from '@chakra-ui/react'
import NavBar from '../../components/Navbar/NavBar';
import SideNav from './SideNav/SideNav';
import ChatList from './Chat/ChatList';
import ChatContainer from './Chat/ChatContainer';
import EditProfileForm from './Profile/EditProfileForm';

const Dashboard = () => {
  return (
    <Container display='flex' flexDirection='column' minW='100vw' minH='100vh' p={0}>
      <NavBar />
      <Container display='flex' flex='1' minW='100%'>
        <SideNav />
        <EditProfileForm />
        <ChatList  />
      </Container>
    </Container>
  )
}

export default Dashboard;
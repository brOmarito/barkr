import { Container, Box } from '@chakra-ui/react'
import NavBar from '../../components/Navbar/NavBar';
import SideNav from './SideNav/SideNav';
import ChatList from './Chat/ChatList';
import ChatContainer from './Chat/ChatContainer';
import EditProfileForm from './Profile/EditProfileForm';
import ExploreContainer from './Explore/ExploreContainer';
import EventsContainer from './Events/Events';
import { useState } from 'react';

const Dashboard = () => {
  const [activePage, setActivePage] = useState("explore")
  function changePage(page) {
    setActivePage(page)
  }
  return (
    <Container display='flex' flexDirection='column' minW='100vw' minH='100vh' p={0}>
      <NavBar />
      <Container display='flex' flex='1' minW='100%'>
        <SideNav clickHandler={changePage} />
        {activePage === "profile" && <EditProfileForm />}
        {activePage === "explore" && <ExploreContainer />}
        {activePage === "events" && <EventsContainer />}
        {activePage === "chat" && <ChatContainer />}
        <ChatList />
      </Container>
    </Container>
  )
}

export default Dashboard;
import { Container, Box } from '@chakra-ui/react'
import NavBar from '../../components/Navbar/NavBar';
import SideNav from './SideNav/SideNav';
import ChatList from './Chat/ChatList';
import ChatContainer from './Chat/ChatContainer';
import EditProfileForm from './Profile/EditProfileForm';
import ExploreContainer from './Explore/ExploreContainer';
import EventsContainer from './Events/Events';
import SmallWithSocial from '../../components/Navbar/Footer';
import { useState, useEffect } from 'react';
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../../utils/queries';

const Dashboard = () => {
  const [activePage, setActivePage] = useState("explore")
  
  function changePage(page) {
    setActivePage(page)
  }

  const [currentProfile, setCurrentProfile]=useState({})

  const {loading, data} = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { userId: Auth.getProfile().data._id}
  });

  useEffect(() => {
    if (loading) return null
    let profile = data.profile;
    setCurrentProfile(profile)
  })
  
  return (
    <Container display='flex' flexDirection='column' minW='100vw' minH='100vh' p={0}>
      <NavBar />
      <Container display='flex' flex='1' minW='100%' px="20rem">
        <SideNav clickHandler={changePage} />
        {activePage === "profile" && <EditProfileForm initialValues={currentProfile} />}
        {activePage === "explore" && <ExploreContainer />}
        {activePage === "events" && <EventsContainer />}
        {activePage === "chat" && <ChatContainer />}
      </Container>
      <SmallWithSocial/>
    </Container>
  )
}

export default Dashboard;
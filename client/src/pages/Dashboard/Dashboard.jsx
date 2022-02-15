import { Container } from '@chakra-ui/react'
import NavBar from '../../components/Navbar/NavBar';
import SideNav from './SideNav/SideNav';
import ChatList from './Chat/ChatList';
import ChatContainer from './Chat/ChatContainer';
import EditProfileForm from './Profile/EditProfileForm';
import UserProfile from './Profile/UserProfile';
import ExploreContainer from './Explore/ExploreContainer';
import EventsContainer from './Events/Events';
import SmallWithSocial from '../../components/Navbar/Footer';
import { useState, useEffect, useContext } from 'react';
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../../utils/queries';
import { ChatRoomProvider } from '../../utils/GlobalState';

const Dashboard = () => {
  const [activePage, setActivePage] = useState("explore")
  const [currentProfile, setCurrentProfile] = useState({});
  const [viewProfile, setViewProfile] = useState({});

  function changePage(page, profile) {
    setActivePage(page);
    setViewProfile(profile);
  }

  const {loading, data} = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { userId: Auth.getProfile().data._id }
  });

  useEffect(() => {
    if (loading === false && data) {
    let profile = data.profile;
    setCurrentProfile(profile)
    }
  },[loading, data])

  return (
    <ChatRoomProvider>
    <Container display='flex' flexDirection='column' maxW='100%' minH='100vh' p={0}>
      <NavBar clickHandler={changePage} />
      <Container display='flex' flex='1' minW='100%' px={{base: '0' , md:"2rem"}}>
        <SideNav clickHandler={changePage} userInfo={currentProfile} />
        {activePage === "profile" && <EditProfileForm initialValues={currentProfile} />}
        {activePage === "explore" && <ExploreContainer currentProfile={currentProfile} clickHandler={changePage} />}
        {activePage === "events" && <EventsContainer />}
        {activePage === "chat" && <ChatContainer />}
        {activePage === "userProfile" && <UserProfile profile={viewProfile} />}
      </Container>
      <SmallWithSocial/>
    </Container>
    </ChatRoomProvider>
  )
}

export default Dashboard;
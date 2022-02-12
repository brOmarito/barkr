import { Container, Box } from '@chakra-ui/react'
import NavBar from '../../components/Navbar/NavBar';
import SideNav from './SideNav/SideNav';
import ChatList from './Chat/ChatList';
import ChatContainer from './Chat/ChatContainer';
import EditProfileForm from './Profile/EditProfileForm';
import { Route, Switch, } from 'react-router-dom';
import  ExploreContainer  from './Explore/ExploreContainer';
import EventsContainer from './Events/Events';
import SmallWithSocial from '../../components/Navbar/Footer';

const Dashboard = () => {
  return (
    <Container display='flex' flexDirection='column' minW='100vw' minH='100vh' p={0}>
      <NavBar />
      <Container display='flex' flex='1' minW='100%'>
        <SideNav />
        <Switch>
          <Route exact path="/profile" component={EditProfileForm} />
          <Route exact path="/chat" component={ChatContainer} />
          <Route exact path="/explore" component={ExploreContainer} />
          <Route exact path="/events" component={EventsContainer} />
        </Switch>
        <ChatList />
      </Container>
      <SmallWithSocial/>
    </Container>
  )
}

export default Dashboard;
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar';
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Auth from './utils/auth';



import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function requireAuth(nextState, replaceState) {
//   if (!Auth.loggedIn) {
//     replaceState({ nextPathname: nextState.location.pathname }, '/Dashboard')
//   }
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <ChakraProvider>

            <Switch>
            <Route exact path="/">
              {!Auth.loggedIn() ? <Redirect to="/login" /> : <Dashboard />}
            </Route>
              <Route path="/login" component={Login} />
              <Route path="/Signup" component={SignUp} />
              {/* <Route path="/Profile" component={Pro} />
              <Route path="/Signup" component={SignUp} /> */}
            </Switch>
            {/* <Dashboard /> */}
            {/* <SignUp /> */}
            {/* <Login /> */}
          
          </ChakraProvider>
        </>
      </Router>
    </ApolloProvider >


  );
}



export default App;

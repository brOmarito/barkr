import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar';
import Login from './pages/Login'
import SignUp from './pages/Signup'
import SplashPage from './pages/SplashPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Auth from './utils/auth';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const PORT = process.env.PORT || 3001;


const httpLink = new HttpLink({
  uri: `http://localhost:${PORT}/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:${PORT}/subscriptions`,
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


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
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <ChakraProvider>
            <Switch>
              <Route exact path="/">
                {!Auth.loggedIn() ? <Redirect to="/welcome" /> : <Dashboard />}
              </Route>
              <Route path="/welcome" component={SplashPage} />
              <Route path="/login" component={Login} />
              <Route path="/Signup" component={SignUp} />
            </Switch>
          </ChakraProvider>
        </>
      </Router>
    </ApolloProvider >


  );
}



export default App;

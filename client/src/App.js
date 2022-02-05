import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar';
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Dashboard from './pages/Dashboard/Dashboard'


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


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ChakraProvider>
          {/* <Dashboard /> */}
          <SignUp />
          {/* <Login /> */}

        </ChakraProvider>
      </Router>
    </ApolloProvider>

  );
}



export default App;

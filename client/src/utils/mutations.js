import { gql } from '@apollo/client'

export const LOGIN_USER = gql` 
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_USER = gql` 
  mutation addUser($firstname: String!, $lastname: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstname: $firstname, lastname: $lastname, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
        username
        email
      }
    }
  }
`;

export const SAVE_PROFILE = gql`
muatation saveProfile($profileToSave: ProfileInput) {

}
`
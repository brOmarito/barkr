import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!,
    $lastName: String!,
    $username: String!, 
    $email: String!, 
    $password: String!) {
      createUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
          email
          firstName
          lastName
        }
    }
  }
`;

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
`
export const CREATE_PROFILE = gql`
mutation createProfile($userId: ID!) {
  createProfile(userId: $userId){
      userId
  }
}

`
;



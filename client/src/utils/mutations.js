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

export const UPDATE_PROFILE = gql`
mutation updateProfile(
  $userId: ID
  $bio: String
  $dogName: String
  $dogBreed: String
  $dogDescription: String
  $lookingForLove: Boolean
  $lookingForFriends: Boolean
  $city: String
  $state: String
  $image: String) {
    updateProfile(
      userId: $userId
      bio: $bio
      dogName: $dogName
      dogBreed: $dogBreed
      dogDescription: $dogDescription
      lookingForLove: $lookingForLove
      lookingForFriends: $lookingForFriends
      city: $city
      state: $state
      image: $image
    ){
      userId
      bio
      dogName
      dogBreed
      dogDescription
      lookingForLove
      lookingForFriends 
    }
  }
`
  ;



import { gql } from '@apollo/client';

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       profile {  
//       }
//     }
//   }
// `;

export const QUERY_SINGLE_PROFILE = gql`
  query queryProfile($userId: ID!) {
    profile(userId: $userId){
        userId
        bio
        dogName
        dogBreed
        dogDescription
        city
        state
        lookingForLove
        lookingForFriends 
    }
  }
`

export const QUERY_PROFILES = gql`
  query queryProfiles {
    profiles {
      userId
      bio
      dogName
      dogBreed
      city
      state
      dogDescription
      lookingForLove
      lookingForFriends
      image
    }
  }
`

// query userProfiles {
//   users {
//     firstName
//     lastName
//     username
//     email
//   }
// }

export const QUERY_CHAT = gql`
  query getChat($chatId: String!) {
    getChat(chatId: $chatId){
			roomName
      users
      messages {
        text
        createdBy
        createdAt
      }
    }
  }
`

export const QUERY_CHAT_EXISTS = gql`
  query chatExists($chatId: String!) {
    getChat(chatId: $chatId){
			roomName
    }
  }
`
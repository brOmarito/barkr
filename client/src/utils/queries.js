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
        image
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

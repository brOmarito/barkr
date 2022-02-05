import { gql } from '@apollo/client'

export const GET_ME = gql`
query me {
    me {
        _id
        firstname
        lastname
        username
        email
        savedProfiles {
            bio
            dogbreed
            description
            profileId
            image
            link
        }
    }
}
`;


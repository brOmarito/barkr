const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
 
}

type Profile {
    userId: ID!
    bio: String
    dogName: String
    dogBreed: String
    dogDescription: String
    lookingForLove: Boolean
    lookingForFriends: Boolean
    city: String
    state: String
    image: String
}

type Chat {
    username: String!
    timeStamp: String!
    chatText: String!
}

type Chatroom {
    roomName: String!
    chats: [Chat]
}

input ProfileInput {
    userId: ID!
    bio: String
    dogName: String
    dogBreed: String
    dogDescription: String
    lookingForLove: Boolean
    lookingForFriends: Boolean
    city: String
    state: String
    image: String
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
    users: [ User ]
    profile(userId: ID!): Profile 
}
type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, firstName: String!, lastName: String!, password: String!): Auth
    createProfile(userId: ID!): Profile
    updateProfile(userId: String!): Profile
    saveProfile(profileToSave: ProfileInput): User 
    removeProfile(profileId: String!): User

    
  }
`;

module.exports = typeDefs;
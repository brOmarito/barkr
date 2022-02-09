const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    savedProfile: Profile
}

type Profile {
    bio: String!
    description: String!
    userId: String!
    image: String
    link: String
}

type Chat {
    username: String!
    timeStamp: Date!
    chatText: String!
}

type Chatroom {
    roomName: String!
    chats: [Chat]
}

input ProfileInput {
    bio: String!
    description: String!
    profileId: String!
    image: String
    link: String
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
    users: [ User ]
}
type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, firstName: String!, lastName: String!, password: String!): Auth
    saveProfile(profileToSave: ProfileInput): User 
    removeProfile(profileId: String!): User
    
  }
`;

module.exports = typeDefs;
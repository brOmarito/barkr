const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    firstname: String!
    lastname: String!
    username: String!
    email: String!
    savedProfile: [Profile]
}
type Profile {
    bio: String!
    description: String!
    profileId: String!
    image: String
    link: String
}
type Auth {
    token: String
    user: [User]
}
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, firstname: String!, lastname: String!, password: String!): Auth
    saveProfile(profileToSave: Profile): User 
    removeProfile(profileId: String!): User
    
  }
`;

module.exports = typeDefs;
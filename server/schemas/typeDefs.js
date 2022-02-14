const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    chats: [Chat]
 
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

type Message {
    _id: ID
    createdBy: String!
    createdAt: String!
    text: String!
}

type Chat {
    _id: ID
    roomName: String!
    users: [Profile]
    messages: [Message]
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
    profiles: [ Profile ]
    chats: [Chat]
	  chat(id:Int!): Chat
	  messages(chatId:Int): [Message]
	  users(chatId:Int): [User]
	  user(id:Int, search:String): User
}
type Mutation {
    login(email: String!, password: String!): Auth

    createUser(
        username: String!, 
        email: String!, firstName: 
        String!, lastName: String!, 
        password: String!
        ): Auth

    createProfile(userId: ID!): Profile

    updateProfile(
       userId: ID 
       bio: String,
       dogName: String,
       dogBreed: String,
       dogDescription: String,
       lookingForLove: Boolean,
       lookingForFriends: Boolean,
       city: String,
       state: String,
       image: String,
        ): Profile
    
    addMessage(text: String!, userId: Int!, chatId: Int!): Message
    
  }
  type Subscription {
	  messageAdded(chatId: Int!): Message
  }
`;

module.exports = typeDefs;
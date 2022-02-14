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
    chatId: String!
}

type Chat {
    _id: ID
    roomName: String!
    users: [String]
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

input MessageInput {
    _id: ID
    createdBy: String!
    createdAt: String!
    text: String!
    chatId: String!
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
	  chat(chatId:String!): Chat
	  messages(chatId:String): [Message]
	  chatUsers(chatId:String): [User]
	  user(_id:ID!): User
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
    addMessage(text: String!, userId: Int!, chatId: String!): Message
    createChat(roomName: String!, users: [String]!, messages: [MessageInput]): Chat    
}
type Subscription {
  messageAdded(chatId: String!): Message
}
`;

module.exports = typeDefs;
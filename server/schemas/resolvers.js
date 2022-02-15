const { User, Message, Profile, Chat } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();
const { withFilter } = require('graphql-subscriptions');
const CHAT_CHANGED = 'chat_changed'

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedProfiles');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    users: async (parent, context) => {
      return User.find()
    },

    profile: async (parent, { userId } ) => {
      return Profile.findOne({ userId: userId})
    },

    profiles: async (parent, context) => {
      return Profile.find()
    },
    getChat: async (parent, { chatId }, context) => {
      return  Chat.findOne({roomName: chatId})
    },
    chatExists: async (parent, { chatId }, context) => {
      return Chat.findOne({roomName: chatId})

    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const finduser = await User.findOne({ email })

      if (!finduser) {
        throw new AuthenticationError('No user with this email found!')
      }

      const correctPw = await finduser.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(finduser)
      return { token, finduser }
    },
    createUser: async (parent, { firstName, lastName, username, email, password }) => {
      const newUser = await User.create({ firstName, lastName, username, email, password })
      const token = signToken(newUser);
      const newProfile = await Profile.create({ userId: newUser._id })
      console.log(newUser)
      console.log(newProfile)
      return { token, newUser }
    },

    createProfile: async (parent, { userId }) => {
      const newProfile = await Profile.create({ userId })
      return newProfile
    },


    updateProfile: async (parent, args, context) => {

      return Profile.findOneAndUpdate(
        { userId: args.userId },
        {
          $set: {
            bio: args.bio,
            dogName: args.dogName,
            dogBreed: args.dogBreed,
            dogDescription: args.dogDescription,
            lookingForLove: args.lookingForLove,
            lookingForFriends: args.lookingForFriends,
            city: args.city,
            state: args.state,
            image: args.image
          }
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    createChat: async (parent, args, context) => {
      const chat = await Chat.create({
        roomName: args.roomName,
        users: args.users,
        messages: args.messages
      })
    },

    addMessage: async (obj, args, context) => {
      const message = await Message.create({
        text: args.text,
        createdBy: args.createdBy,
        createdAt: args.createdAt,
        chatId: args.chatId,
      })
      const chat = await Chat.findOneAndUpdate({roomName: args.chatId}, {$addToSet: {messages: message}}, {new: true})
        .then(() => {
          return message
        })
        .then(message => {
          pubsub.publish('messageAdded', { messageAdded: message });
        })
        .catch(e => {
          console.error(e);
        });
    },

  },

  Subscription: {
    messageAdded: withFilter(
      () => pubsub.asyncIterator('messageAdded'),
      (payload, args) => {
        return payload.messageAdded.chatId === args.chatId;
      }
    ),
  }
};

module.exports = resolvers;
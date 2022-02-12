const { Profile } = require('../models');
const { User, userSchema } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { profileSchema } = require('../models')

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
    // getChat: async (parent, { username }, context) => {
    //   if (context.user) {
    //   return  User.findOne({_id: context.user._id})
    //     .populate({
    //       path : 'Chatroom',
    //       populate : {
    //         path : 'Chat'
    //       }
    //     })
    //   }
    //   throw new AuthenticationError('You need to be logged in!')
    // }
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
    }




  }
};

module.exports = resolvers;
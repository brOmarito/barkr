const { Profile, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedProfiles');
      }
      throw new AuthenticationError('You need to be logged in!');
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
        addUser: async (parent, { username, email, password }) => {
            const newuser = await User.create({ username, email, password })
            const token = signToken(newuser);

            return { token, newuser }
        },


        saveProfile: async (parent, { profileToSave }, context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: context.user._id },
                {
                  $addToSet: { savedProfiles: profileToSave },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }

            throw new AuthenticationError('You need to be logged in!');
          },



          removeProfile: async (parent, { profileId }, context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedProfiles: { profileId: profileId } } },
                { new: true }
              )
            }

            throw new AuthenticationError('You need to be logged in!');
          },
    }
};

module.exports = resolvers;
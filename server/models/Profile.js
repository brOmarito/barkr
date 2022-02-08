const { Schema } = require('mongoose');


const profileSchema = new Schema({
    bio: {
        type: String,
    },
    dogBreed: {
        type: String,
    },
    dogDescription: {
        type: String,
    },
    lookingForLove: {
        type: Boolean
    },
    lookingForFriends: {
        type: Boolean
    },
    location: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
});

module.exports = profileSchema;
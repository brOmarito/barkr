const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const profileSchema = new Schema({
    bio: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    profileId: {
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
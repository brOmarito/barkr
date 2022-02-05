const { Schema } = require('mongoose');


const profileSchema = new Schema({
    bio: {
        type: String,
        required: true
    },
    dogbreed: {
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
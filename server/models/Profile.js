const { Schema, model } = require('mongoose');


const profileSchema = new Schema({
    bio: {
        type: String,
        default: "",
    },
    dogName: {
        type: String,
        default: "",
    },
    dogBreed: {
        type: String,
        default: "",
    },
    dogDescription: {
        type: String,
        default: "",
    },
    lookingForLove: {
        type: Boolean,
        default: false,
    },
    lookingForFriends: {
        type: Boolean,
        default: false,
    },
    city: {
        type: String,
        default: "",
    },
    state: {
        type: String,
        default: "",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    image: {
        type: String,
         default: "",
},

});


const Profile = model('Profile', profileSchema);


module.exports = Profile;
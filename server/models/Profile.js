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
        default: "https://res.cloudinary.com/pariveda-solutions/image/upload/v1644796816/iu_fccg2n.jpg",
},

});


const Profile = model('Profile', profileSchema);


module.exports = Profile;
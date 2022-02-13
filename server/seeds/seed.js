const db = require('../config/connection');
const { User, Profile } = require('../models');

db.once('open', async () => {

    await User.deleteMany();
    await Profile.deleteMany();


const userData =  await User.insertMany([
    {
        firstName: 'Frank',
        lastName: 'Smith',
        username: 'Fsmith456',
        email: 'frank@testmail.com',
        password: 'password12345'
    },
    {
        firstName: 'Elijah',
        lastName: 'Wood',
        username: 'eWood99',
        email: 'ewood@testmail.com',
        password: 'password12345'
    },
    {
        firstName: 'Billy',
        lastName: 'Bob',
        username: 'billyboy489',
        email: 'bbob@testmail.com',
        password: 'password12345'
    },
    {
        firstName: 'Eric',
        lastName: 'Taylor',
        username: 'eTaylor',
        email: 'bbobb@testmail.com',
        password: 'password12345'
    },
    {
        firstName: 'Johnny',
        lastName: 'Bravo',
        username: 'johnnyB56',
        email: 'jBravo@testmail.com',
        password: 'password12345'
    },
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        username: 'Lskydaddy',
        email: 'Lwalker@testmail.com',
        password: 'password12345'
    },
    {
        firstName: 'Chris',
        lastName: 'Brown',
        username: 'Cbrown852',
        email: 'Cbrown@testmail.com',
        password: 'password12345'
    },
    {
        firstName: 'Kirby',
        lastName: 'Smart',
        username: 'GoDawgs3318',
        email: 'Ksmart@testmail.com',
        password: 'password12345'
    },
]);

const users = await User.find();

const profileData = await Profile.insertMany([
    {
        userId: users[0]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: ""
    },
    {
        userId: users[1]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: ""

    },
    {
        userId: users[2]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: ""
    },
    {
        userId: users[3]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: ""
    },
    {
        userId: users[4]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "",
    },
    {
        userId: users[5]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "",
    },
    {
        userId: users[6]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "",
    },
    {
        userId: users[7]._id,
        bio: "I love dogs so much they're cool",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "",
    },
])

console.log(users);
console.log('users seeded')

process.exit();

});





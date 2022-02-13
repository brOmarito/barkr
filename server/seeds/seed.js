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
        bio: "I love dogs so much they're cool.",
        dogName: "Tito",
        dogBreed: "Husky",
        dogDescription: "I am a big dog who likes to play fetch.",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "husky-barkr.jpg"
    },
    {
        userId: users[1]._id,
        bio: "Dogs are pretty dope!",
        dogName: "Scout",
        dogBreed: "Boxer",
        dogDescription: "I really like my human!",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "boxer-barkr.jpg"

    },
    {
        userId: users[2]._id,
        bio: "Just a good ole boy and hig best friend.",
        dogName: "Buddy",
        dogBreed: "Black Lab",
        dogDescription: "I love riding in my Dad's truck.",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "blacklab-barkr.jpg"
    },
    {
        userId: users[3]._id,
        bio: "When I am not coaching the Panthers, I enjoy playing fetch with my good boy.",
        dogName: "Max",
        dogBreed: "Golden Retriever",
        dogDescription: "Watching my Dad coach football is fun. I like to run around the field.",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "goldretriever-barkr.jpg"
    },
    {
        userId: users[4]._id,
        bio: "My dog is my best friend.",
        dogName: "Charlie",
        dogBreed: "Goldendoodle",
        dogDescription: "I enjoy going on walks with my Dad.",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "goldendoodle-barkr.jpg",
    },
    {
        userId: users[5]._id,
        bio: "I like to fly my X-wing with my dog as my co-pilot.",
        dogName: "Yoda",
        dogBreed: "Rottweiler",
        dogDescription: "Flying across the galaxy is cool!",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "rottweiler-barkr.jpg",
    },
    {
        userId: users[6]._id,
        bio: "Having a dog is so cool.",
        dogName: "Harley",
        dogBreed: "Doberman",
        dogDescription: "I like to be in the studio with my dad.",
        city: "Atlanta",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "doberman-barkr.jpg",
    },
    {
        userId: users[7]._id,
        bio: "I love dogs and I also the DAWGS!",
        dogName: "UGA",
        dogBreed: "English Bulldog",
        dogDescription: "I am the best College Football Mascot out there. Walking around Sanford Stadium is my favorite, especially after beating Alabama 33-18 in the National Championship!",
        city: "Athens",
        state: "GA",
        lookingForFriends: true,
        lookingForLove: true,
        image: "uga-barkr.jpg",
    },
])

console.log(users);
console.log('users seeded')

process.exit();

});





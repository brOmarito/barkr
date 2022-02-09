const mongoose = require('mongoose');

const { Schema } = mongoose;


const chatRoomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Chat'
      }
    ]
});

const Chatroom = mongoose.model('Chatroom', chatRoomSchema);

module.exports = Chatroom;
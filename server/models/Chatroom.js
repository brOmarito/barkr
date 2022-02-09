const { Schema } = require('mongoose');


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

module.exports = chatRoomSchema;
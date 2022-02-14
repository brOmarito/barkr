const mongoose = require('mongoose');


const { Schema } = mongoose;


const chatSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    users: {
      type: [String]
    },
    messages: [
      {
        type: Object,
        ref: 'Message'
      }
    ]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
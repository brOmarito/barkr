const mongoose = require('mongoose');
const { User } = require('.');

const { Schema } = mongoose;


const chatSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    users: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message'
      }
    ]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
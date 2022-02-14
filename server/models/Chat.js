const mongoose = require('mongoose');

const { Schema } = mongoose;


const chatSchema = new Schema({
    roomName: {
        type: String,
        required: true,
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
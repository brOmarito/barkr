const mongoose = require('mongoose');

const { Schema } = mongoose;

const chatSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  chatText: {
    type: String,
    required: true,
  }

});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;

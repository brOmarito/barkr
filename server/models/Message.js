const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }

});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

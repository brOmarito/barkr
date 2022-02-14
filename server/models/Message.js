const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  chatId: {
    type: String,
    required: true
  }

});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

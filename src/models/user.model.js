const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
  telegramId: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: true
  },
  languageCode: {
    type: String,
    required: false
  }
})

//mongoose.model('users', UserSchema)
module.exports = mongoose.model('User', UserSchema)

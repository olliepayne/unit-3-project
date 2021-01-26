const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, max: 16 },
  avatarURL: String,
  submittedClimbs: { type: mongoose.Schema.Types.ObjectId, ref: 'Climb' }
})

module.exports = mongoose.model('User', userSchema)
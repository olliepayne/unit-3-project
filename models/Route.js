const mongoose = require('mongoose')

const routeSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  grade: { type: String, required: true },
  consumerGrades: [String],
  userRatings: [Number],
  location: { type: String, required: true },
  description: String,
  images: [String]
})

module.exports = mongoose.model('Route', routeSchema)
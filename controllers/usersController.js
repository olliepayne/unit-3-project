const User = require('../models/User')

module.exports = {
  index
}

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}
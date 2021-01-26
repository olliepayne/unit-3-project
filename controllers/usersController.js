const User = require('../models/User')

module.exports = {
  index,
  getOne
}

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}

function getOne(req, res) {
  User.findById(req.body.id)
  .then(user => res.json(user))
}
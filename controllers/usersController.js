const User = require('../models/User')

module.exports = {
  getOne
}

function getOne(req, res) {
  User.findOne(req.id)
  .then(user => res.json(user))
}
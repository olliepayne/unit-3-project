const User = require('../models/User')

module.exports = {
  getOne
}

function getOne(req, res) {
  User.findOne(req.filters)
  .then(user => res.json(user))
}
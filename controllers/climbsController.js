const Climb = require('../models/Climb')

module.exports = {
  create,
  index
}


function create(req, res) {
  Climb.create(req.body)
  .then(climb => res.json(climb))
}

function index(req, res) {
  Climb.find({})
  .then(climbs => res.json(climbs))
}
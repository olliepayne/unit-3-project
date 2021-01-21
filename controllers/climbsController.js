const Route = require('../models/Route')

module.exports = {
  create,
  index
}


function create(req, res) {
  Route.create(req.body)
  .then(route => res.json(route))
}

function index(req, res) {
  Route.find({})
  .then(routes => res.json(routes))
}
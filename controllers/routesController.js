const Route = require('../models/Route')

module.exports = {
  create,
  index
}


function create(req, res) {
  Route.create(req.body)
}

function index(req, res) {

}
const jwt = require('jsonwebtoken')

function auth(req, res, next) {
  if(!localStorage.getItem('token')) return
  next()
}

module.exports = auth
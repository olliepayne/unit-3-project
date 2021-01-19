const jwt = require('jsonwebtoken')

function auth(req, res, next) {
  const token = req.header('x-auth-token')

  // Check for token
  if(!token) res.status(401).json({ msg: 'No token, access denied' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch(err) {
    res.status(400).json({ msg: 'Token is not valid' })
  }
}

module.exports = auth
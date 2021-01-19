const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

module.exports = {
  login,
  getUserData
}

function login(req, res) {
  const { email, password } = req.body

  if(!email || !password) return res.status(400).json({ msg: 'Please enter all fields' })
  
  User.findOne({ email })
  .then(user => {
    if(!user) return res.status(400).json({ msg: 'User does not exist' })

    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

      jwt.sign({ id: user._id }, process.env.JWT_SECRET, (err, token) => {
        if(err) throw err

        res.json({
          token,
          user: {
            id: user._id,
            email: user.email,
            username: user.username
          }
        })
      })
    })
  })
}

function getUserData(req, res) {
  User.findById(req.user.id)
  .select('-password')
  .then(user => res.json(user))
}
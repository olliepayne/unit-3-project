const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

module.exports = {
  signup,
  login,
}

function signup(req, res) {
  const { username, email, password, passwordCheck } = req.body

  if(!email || !password) return res.status(400).json({ msg: 'Please enter all fields' })

  if(password !== passwordCheck) return res.status(400).json({ msg: 'Passwords do not match' })
  
  User.findOne({ email })
  .then(user => {
    if(user) return res.status(400).json({ msg: 'User already exists' })

    let newUsername
    if(!username) {
      newUsername = email
    } else {
      newUsername = username
    }

    const newUser = new User({
      email,
      password,
      username: newUsername
    })

    bcrypt.genSalt(12, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if(err) throw err
        newUser.password = hash
        newUser.save()
        .then(user => {
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
    })
  })
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
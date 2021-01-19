const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports = {
  signup
}

function signup(req, res) {
  const { email, password, username } = req.body

  if(!email || !password || !username) return res.status(400).json({ msg: 'Please enter all fields' })

  User.findOne({ email })
  .then(user => {
    if(user) return res.status(400).json({ msg: 'User already exists' })

    const newUser = new User({
      email,
      password,
      username
    })

    bcrypt.genSalt(12, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if(err) throw err
        newUser.password = hash
        newUser.save()
        .then(user => {
          res.json({
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
}
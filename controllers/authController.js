const bcrypt = require('bcrypt')

const User = require('../models/User')

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
  })
}
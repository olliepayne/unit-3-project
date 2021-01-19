const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/usersController')

router.post('/signup', userCtrl.signup)

module.exports = router
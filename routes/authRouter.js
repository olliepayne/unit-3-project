const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const authCtrl = require('../controllers/authController')

// - - - public routes - - -
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

// - - - private routes - - -

module.exports = router
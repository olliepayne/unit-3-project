const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const climbsCtrl = require('../controllers/climbsController')

// - - - public routes - - -
router.get('/', climbsCtrl.index)

// - - - private routes - - -
router.post('/', climbsCtrl.create)

module.exports = router
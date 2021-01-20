const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const routesCtrl = require('../controllers/routesController')

// - - - public routes - - -
router.get('/', routesCtrl.index)

// - - - private routes - - -
router.post('/', routesCtrl.create)

module.exports = router
const express = require('express')
const router = express.Router()

const routesCtrl = require('../controllers/routesController')

// - - - public routes - - -
router.get('/', routesCtrl.index)

// - - - private routes - - -

module.exports = router
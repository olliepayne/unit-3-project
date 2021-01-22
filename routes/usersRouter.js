const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/usersController')

router.get('/', usersCtrl.index)

module.exports = router
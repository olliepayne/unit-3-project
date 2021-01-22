const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/usersController')

router.get('/users/:id', usersCtrl.getOne)

module.exports = router
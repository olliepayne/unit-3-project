const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/usersController')

router.get('/', usersCtrl.index)
router.get('/:id', usersCtrl.getOne)

module.exports = router
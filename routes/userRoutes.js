const express = require('express');
const { getUserData } = require('../controllers/UserController');
const router = express.Router()


router.get('/hello', getUserData)

module.exports = router
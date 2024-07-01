const express = require('express');
const { getUserData, showData } = require('../controllers/UserController');
const router = express.Router()


router.get('/hello', getUserData)
router.get('/show', showData)

module.exports = router
const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/user', userController.list);

module.exports = router;
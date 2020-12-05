const express = require('express');
const { logged } = require('../controllers/AuthController');

const router = express.Router();

router.get('/', logged, (req, res) => {
    res.render('index');
});

module.exports = router;
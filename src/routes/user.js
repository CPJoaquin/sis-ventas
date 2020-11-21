const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/user', userController.list);
router.get('/user/create', (req, res) => {
    res.render('user/create');
});
router.get('/user/show/:id', userController.show);

router.post('/user/store', userController.store);

module.exports = router;
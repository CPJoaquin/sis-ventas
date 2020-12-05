const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

const { logged } = require('../controllers/AuthController');

router.get('/user', logged, userController.list);
router.get('/user/create', logged, (req, res) => {
    res.render('user/create');
});
router.get('/user/show/:id', logged, userController.show);
router.get('/user/edit/:id', logged, userController.edit);

router.post('/user/store', logged, userController.store);
router.post('/user/update/:id', logged, userController.update);

module.exports = router;
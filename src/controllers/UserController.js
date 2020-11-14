const userModel = require('../moedls/User');
const controller = {};

controller.list = async (req, res) => {
    const users = await userModel.get();
    res.render('user/index', {users: users});
};
module.exports = controller;
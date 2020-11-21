const userModel = require('../moedls/User');
const controller = {};

controller.list = async (req, res) => {
    const users = await userModel.get();
    res.render('user/index', {users: users});
};
controller.show = async (req, res) => {
    const {id} = req.params;
    const user = await userModel.find(id);
    res.render('user/show', {user: user});
};
controller.store = async (req, res) => {
    const {first_name, last_name, username, email, password} = req.body;
    const user = {first_name, last_name, username, email, password};
    try{
        var inserted = await userModel.insert(user);
        if(inserted === 'error'){
            res.send('error');
        }
        else{
            res.redirect('/user');
        }
    }
    catch(error){

    }
};
module.exports = controller;
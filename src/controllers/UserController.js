const userModel = require('../models/User');
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
controller.edit = async (req, res) => {
    const {id} = req.params;
    const user = await userModel.find(id);
    if(user.length == 0){
        res.redirect('/user');
    }
    else{
        res.render('user/edit', {user: user});
    }
}
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
controller.update = async (req, res) => {
    const {id} = req.params;
    const {first_name, last_name, username, email, password} = req.body;
    var user;
    if(password.length > 5){
        user = {first_name, last_name, username, email, password};
    }
    else{
        user = {first_name, last_name, username, email};
    }
    try {
        var updated = await userModel.update(id, user);
        if(updated == 'error'){
            res.redirect('/user/edit/'+id);
        }
        else{
            res.redirect('/user/show/'+id);
        }
    } catch (error) {
        res.send('ERROR: ' + error);
    }
}
module.exports = controller;
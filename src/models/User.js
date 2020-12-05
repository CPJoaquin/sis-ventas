const pool = require('../database');
const bcrypt = require('../config/bcrypt');

const model = {};

model.get = async () => {
    data = await pool.query("SELECT * FROM users");   
    return data;
};
model.find = async (id) => {
    data = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return data;
};
model.findByUserName = async (username) => {
    data = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    return data;
}
model.insert = async (user) => {
    try{
        pass = await bcrypt.encryptPass(user.password);
        user.password = pass;
        return await pool.query("INSERT INTO users set ?", [user]);
    }
    catch(error){
        return 'error';
    }
}
model.update = async (id, user) => {
    try {
        if(typeof(user.password) !== 'undefined'){
            pass = await bcrypt.encryptPass(user.password);
            user.password = pass;
        }
        return await pool.query("UPDATE users set ? WHERE id = ?", [user, id]);
    } catch (error) {
        return 'error';
    }
}
module.exports = model;
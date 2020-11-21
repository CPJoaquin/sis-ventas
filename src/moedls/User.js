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
model.insert = async (user) => {
    try{
        var pass = await bcrypt.encryptPass(user.password);
        user.password = pass;
        return await pool.query("INSERT INTO users set ?", [user]);
    }
    catch(error){
        return 'error';
    }
}
module.exports = model;
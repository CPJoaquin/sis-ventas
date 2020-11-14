const pool = require('../database');

const model = {};

model.get = async () => {
    data = await pool.query("SELECT * FROM users");   
    return data;
};
module.exports = model;
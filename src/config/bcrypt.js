const bcrypt = require('bcryptjs');
const encrypt = {};

encrypt.encryptPass = async (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
}

encrypt.checkPass = async (password, hash) => {
    return await bcrypt.compareSync(password, hash);
};
module.exports = encrypt;
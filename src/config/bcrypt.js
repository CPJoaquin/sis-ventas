const bcrypt = require('bcryptjs');
const encrypt = {};

encrypt.encryptPass = async (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

encrypt.checkPass = async (password, savedPassword) => {
    try{
        return await bcrypt.compareSync(password, savedPassword);
    }
    catch(error){
        console.log(error);
        return;
    }
};
module.exports = encrypt;
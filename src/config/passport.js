const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('./bcrypt');
const userModel = require('../models/User');

passport.use('local.signin', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const users = await userModel.findByUserName(username);
    if(users.length > 0){
        const user = users[0];

        const value = await bcrypt.checkPass(password, user.password);
        console.log(value);
        if(!value){
            console.log('DATO INCORRECTO');
            done(null, false);
        }
        else{
            console.log('USUARIO ENCONTRADO');
            done(null, user);
        }
    }
    else{
        console.log('NO SE ENCONTRO');
        done(null, false);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser( async (id, done) => {
    const users = await userModel.find(id);
    done(null, users[0]);
});

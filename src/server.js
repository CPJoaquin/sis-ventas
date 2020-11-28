//IMPORTACIONES
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { urlencoded, json } = require('express');

const session = require('express-session');
const mysqlStore = require('express-mysql-session');
const {database} = require('./keys');
const passport = require('passport');

//EJECUCIONES
const app = express();
require('./config/passport');
//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDLEEWARES
app.use(morgan('dev'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(passport.initialize());
app.use(passport.session());

//VARIABLES GLOBALES
app.use((req, res, next) => {
    next();
});
//RUTAS
app.use(require('./routes/'));
app.use(require('./routes/auth'));
app.use(require('./routes/user'));

//PUBLICO
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
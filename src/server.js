//IMPORTACIONES
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { urlencoded, json } = require('express');

const session = require('express-session');
const mysqlStore = require('express-mysql-session');
const {database} = require('./keys');

//EJECUCIONES
const app = express();
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

//VARIABLES GLOBALES
app.use((req, res, next) => {
    next();
});
//RUTAS
app.use(require('./routes/'));
app.use(require('./routes/user'));
//PUBLICO
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
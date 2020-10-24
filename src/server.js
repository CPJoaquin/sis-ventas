//IMPORTACIONES
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { urlencoded, json } = require('express');

//EJECUCIONES
const app = express();
//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDLEEWARES
app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(json());

//VARIABLES GLOBALES
app.use((req, res, next) => {
    next();
});
//RUTAS
app.use(require('./routes/'));
//PUBLICO
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
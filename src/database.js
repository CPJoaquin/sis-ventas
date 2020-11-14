const {database} = require('./keys');
const {promisify} = require('util');
const mysql = require('mysql');

const mysql_pool = mysql.createPool(database);

mysql_pool.getConnection( (err, conn) => {
    var message = 'Conexión correcta';
    if(err){
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            message = 'Conexión perdida';
        }
        if(err.code === "ECONNREFUSED"){
            message = 'Conexion rechazada';
        }
        if(err.code === "ER_ACCESS_DENIED_ERROR")
            message = 'Acceso denegado';
    }
    if(conn)
        conn.release();
    console.log(message);
    return ;
} );

mysql_pool.query = promisify(mysql_pool.query);

module.exports = mysql_pool;
